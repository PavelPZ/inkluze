using System.IO;
using System.Text;
using System.Web;

namespace inkluze {
  /// <summary>GET-only handler for course outline catalog (not termíny).</summary>
  public class KatalogKurzuHandler : IHttpHandler {
    private const string DataFile = "~/App_Data/katalog-kurzu.json";

    public bool IsReusable => false;

    public void ProcessRequest(HttpContext context) {
      context.Response.ContentType = "application/json; charset=utf-8";
      // Always revalidate — osnovy se mění deployem bez nového URL.
      context.Response.Cache.SetCacheability(HttpCacheability.NoCache);
      context.Response.Cache.SetNoStore();
      if (context.Request.HttpMethod.ToUpperInvariant() != "GET") {
        context.Response.StatusCode = 405;
        context.Response.Write("{\"error\":\"Method not allowed\"}");
        return;
      }

      var path = context.Server.MapPath(DataFile);
      EnsureDataFile(path);
      context.Response.Write(File.ReadAllText(path, Encoding.UTF8));
    }

    private static void EnsureDataFile(string path) {
      var dir = Path.GetDirectoryName(path);
      if (!Directory.Exists(dir)) Directory.CreateDirectory(dir);
      if (!File.Exists(path)) {
        File.WriteAllText(path, "{\n  \"courses\": [],\n  \"areas\": []\n}\n", Encoding.UTF8);
      }
    }
  }
}
