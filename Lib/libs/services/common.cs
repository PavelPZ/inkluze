using Newtonsoft.Json;
using System.IO;
using System.Web;
using System;
using System.Net;

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
    public static TOUT run<TIN, TOUT>(string url, TIN inPar) where TOUT : serviceOUT, new() {
      //Prepare OAuth request 
      WebRequest webRequest = WebRequest.Create(url);
      webRequest.ContentType = "application/x-www-form-urlencoded";
      webRequest.Method = "POST";
      byte[] bytes = new byte[] { 0 };
      webRequest.ContentLength = bytes.Length;
      using (Stream outputStream = webRequest.GetRequestStream()) {
        outputStream.Write(bytes, 0, bytes.Length);
      }
      using (WebResponse webResponse = webRequest.GetResponse()) {
        return null;
      }
    }
  }
}