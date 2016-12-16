using Newtonsoft.Json;
using System.IO;
using System.Web;
using System;
using System.Net;
using System.Text;
using System.Text.RegularExpressions;
using System.IO.Compression;
using System.Collections.Generic;

namespace services {
  public class serviceOUT {
    public string error;
  }

  public static class processRequest {
    public static void run<TIN, TOUT>(HttpContext context, Func<TIN, TOUT> inToOut) where TOUT : serviceOUT, new() {
      var res = context.Request.ToString();
      using (var rdr = new StreamReader(context.Request.InputStream)) {
        context.Response.ContentType = "application/json";
        TIN jsonIN; TOUT jsonOUT;
        try {
          var json = rdr.ReadToEnd();
          jsonIN = JsonConvert.DeserializeObject<TIN>(json);
          jsonOUT = inToOut(jsonIN);
        } catch (Exception err) {
          jsonOUT = new TOUT { error = err.Message };
        }
        context.Response.Write(JsonConvert.SerializeObject(jsonOUT));
      }
    }
  }

  public static class callRequest {
    public static TOUT run<TIN, TOUT>(string url, TIN inPar, bool isGet = false) where TOUT : serviceOUT, new() {
      string inParJson = inPar != null ? JsonConvert.SerializeObject(inPar) : "";
      //if (isGet) url = url + "?" + HttpServerUtility..UrlTokenEncode(inParJson);
      WebRequest webRequest = WebRequest.Create(url);
      webRequest.ContentType = "application/json";
      if (isGet) {
        webRequest.Method = "GET";
      } else {
        webRequest.Method = "POST";
        byte[] bytes = Encoding.UTF8.GetBytes(inParJson);
        webRequest.ContentLength = bytes.Length;
        using (Stream outputStream = webRequest.GetRequestStream()) {
          outputStream.Write(bytes, 0, bytes.Length);
        }
      }
      using (WebResponse webResponse = webRequest.GetResponse()) {
        return JsonUtils.StreamToObject<TOUT>(webResponse.GetResponseStream());
      }
    }
  }
}

public class GZipHandler : IHttpHandler {

  public static void GZip(string fn) {
    using (var inFs = new FileStream(fn, FileMode.Open, FileAccess.Read))
    using (var ouFs = new FileStream(fn + ".gzip", FileMode.Create, FileAccess.Write))
    using (GZipStream gzip = new GZipStream(ouFs, CompressionMode.Compress, true)) inFs.CopyTo(gzip);
  }

  public void ProcessRequest(HttpContext context) {
    MakeResponse(context, context.Request.PhysicalPath);
  }
  public bool IsReusable { get { return true; } }

  public static void MakeResponse(HttpContext context, string fn, Action<string> makeGZip = null) {
    fn = dataPath(fn);
    var request = context.Request; var resp = context.Response;
    resp.Cache.SetCacheability(HttpCacheability.Private);
    resp.Cache.SetExpires(DateTime.UtcNow.AddDays(-1));
    string acceptEncoding = request.Headers["Accept-Encoding"];
    //Content type
    resp.ContentType = contentTypes[Path.GetExtension(fn)];
    //Modified?
    DateTime modified = File.GetLastWriteTime(fn);
    string header = request.Headers["If-Modified-Since"];

    if (header != null) {
      DateTime isModifiedSince;
      if (DateTime.TryParse(header, out isModifiedSince) && Math.Abs((modified - isModifiedSince).TotalSeconds) <= 2) {
        resp.StatusCode = 304;
        resp.SuppressContent = true;
        resp.StatusDescription = "Not Modified";
        resp.AddHeader("Content-Length", "0");
        resp.Cache.SetLastModified(modified);
        resp.End();
      }
    }
    //Machines.rootDir
    //...Yes
    resp.Cache.SetLastModified(modified);
    resp.ContentEncoding = Encoding.UTF8;

    if (string.IsNullOrEmpty(acceptEncoding) || !acceptEncoding.Contains("gzip")) {
      resp.WriteFile(fn);
      resp.End();
    }
    if (!File.Exists(fn + ".gzip")) {
      if (makeGZip == null) {
        if (!File.Exists(fn) && localizedFileMask.IsMatch(fn)) resp.Write("{}"); //neni lokalizovany soubor => vrat {}
        else resp.WriteFile(fn);
        resp.End();
      }
      makeGZip(fn);
    }
    resp.AppendHeader("Content-Encoding", "gzip");
    resp.WriteFile(fn + ".gzip");
    resp.End();
  }
  static Regex localizedFileMask = new Regex(@"\w+\.\w{2}_\w{2}\.js$"); //maska pro lokalizovane JS soubory, napr. xxx.cs-cz.js

  static string dataPath(string fn) {
    var rp = "Machines.rootPath;";
    if (!fn.StartsWith(rp)) return fn;
    var rel = fn.Substring(rp.Length);
    var dir = rel.Split('\\')[0];
    switch (dir) {
      case "lm":
      case "data":
      case "media":
      case "publ":
      case "grafia":
      case "skrivanek":
      case "edusoft":
      case "rwbooks":
      case "rwdicts":
      case "rwtts":
        return fn;
      default: return fn;
    }
  }

  static Dictionary<string, string> contentTypes = new Dictionary<string, string> {
      {".json", "text/json"},
      {".rjson", "text/rjson"},
      {".js", "application/x-javascript"},
      {".html", "text/html"},
      {".css", "text/css"},
      {".svg", "image/svg+xml"},
      {".ttf", "application/x-font-ttf"},
      {".otf", "application/x-font-opentype"},
      {".woff", "application/font-woff"},
      {".eot", "application/vnd.ms-fontobject"},

      {".mp4", "video/mp4"},
      {".webm", "video/webm"},
      {".gif", "image/gif"},
      {".png", "image/png"},
      {".bmp", "image/bmp"},
    };
}
