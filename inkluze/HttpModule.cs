using System;
using System.IO;
using System.Web;

namespace inkluze {
    public class HttpModule : IHttpModule {
        public void Dispose() { }

        public void Init(HttpApplication context) {
            context.BeginRequest += (object sender, EventArgs e) => {
                var app = sender as HttpApplication; if (app == null) return;
                var url = app.Request.Url.AbsolutePath; if (!url.ToLower().StartsWith("/index.html")) return;
                var fileName = app.Server.MapPath("~/index.html");
                app.Response.Write(File.ReadAllText(fileName));
                app.Response.End();
            };
        }
    }
}
