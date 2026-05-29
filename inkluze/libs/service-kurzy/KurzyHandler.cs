using Newtonsoft.Json.Linq;
using System.Configuration;
using System.IO;
using System.Text;
using System.Web;

namespace inkluze {
  public class KurzyHandler : IHttpHandler {
    private const string DataFile = "~/App_Data/kurzy.json";
    private const string PasswordSetting = "KurzyAdminPassword";
    private const string AdminPasswordHeader = "X-Admin-Password";

    public bool IsReusable => false;

    public void ProcessRequest(HttpContext context) {
      context.Response.ContentType = "application/json; charset=utf-8";
      switch (context.Request.HttpMethod.ToUpperInvariant()) {
        case "GET":
          HandleGet(context);
          return;
        case "POST":
          if (context.Request.QueryString["action"] == "login") {
            HandleLogin(context);
            return;
          }
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

    private void HandleLogin(HttpContext context) {
      string body;
      using (var reader = new StreamReader(context.Request.InputStream, Encoding.UTF8)) {
        body = reader.ReadToEnd();
      }

      var expected = GetAdminPassword();
      if (string.IsNullOrEmpty(expected)) {
        context.Response.Write("{\"ok\":true}");
        return;
      }

      try {
        var json = JObject.Parse(body);
        var password = json["password"] != null ? json["password"].ToString() : "";
        if (password == expected) {
          context.Response.Write("{\"ok\":true}");
          return;
        }
      } catch {
        context.Response.StatusCode = 400;
        context.Response.Write("{\"error\":\"Invalid request\"}");
        return;
      }

      context.Response.StatusCode = 401;
      context.Response.Write("{\"error\":\"Unauthorized\"}");
    }

    private void HandlePost(HttpContext context) {
      if (!IsAuthorized(context)) {
        context.Response.StatusCode = 401;
        context.Response.Write("{\"error\":\"Unauthorized\"}");
        return;
      }

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

    private static bool IsAuthorized(HttpContext context) {
      var expected = GetAdminPassword();
      if (string.IsNullOrEmpty(expected)) return true;
      var provided = context.Request.Headers[AdminPasswordHeader];
      return provided == expected;
    }

    private static string GetAdminPassword() {
      return ConfigurationManager.AppSettings[PasswordSetting];
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
