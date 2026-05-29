using Newtonsoft.Json.Linq;
using System.IO;
using System.Text;
using System.Web;

namespace inkluze {
  public class KurzyHandler : IHttpHandler {
    private const string DataFile = "~/App_Data/kurzy.json";

    public bool IsReusable => false;

    public void ProcessRequest(HttpContext context) {
      context.Response.ContentType = "application/json; charset=utf-8";
      switch (context.Request.HttpMethod.ToUpperInvariant()) {
        case "GET":
          HandleGet(context);
          return;
        case "POST":
          HandlePost(context);
          return;
        default:
          context.Response.StatusCode = 405;
          context.Response.Write("{\"error\":\"Method not allowed\"}");
          return;
      }
    }

    private void HandleGet(HttpContext context) {
      var path = context.Server.MapPath(DataFile);
      EnsureDataFile(path);
      context.Response.Write(File.ReadAllText(path, Encoding.UTF8));
    }

    private void HandlePost(HttpContext context) {
      string body;
      using (var reader = new StreamReader(context.Request.InputStream, Encoding.UTF8)) {
        body = reader.ReadToEnd();
      }

      if (string.IsNullOrWhiteSpace(body)) {
        context.Response.StatusCode = 400;
        context.Response.Write("{\"error\":\"Body is empty\"}");
        return;
      }

      try {
        JToken.Parse(body);
      } catch {
        context.Response.StatusCode = 400;
        context.Response.Write("{\"error\":\"Invalid JSON\"}");
        return;
      }

      var path = context.Server.MapPath(DataFile);
      EnsureDataFile(path);
      File.WriteAllText(path, body, Encoding.UTF8);
      context.Response.Write("{\"ok\":true}");
    }

    private static void EnsureDataFile(string path) {
      var dir = Path.GetDirectoryName(path);
      if (!Directory.Exists(dir)) Directory.CreateDirectory(dir);
      if (!File.Exists(path)) {
        File.WriteAllText(path, "{\n  \"courses\": []\n}", Encoding.UTF8);
      }
    }
  }
}
