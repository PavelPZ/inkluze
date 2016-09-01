using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace inkluze.Server {
  /// <summary>
  /// Summary description for Q_and_A
  /// </summary>
  public class Q_and_A : IHttpHandler {

    public void ProcessRequest(HttpContext context) {
      context.Response.ContentType = "text/plain";
      context.Response.Write("Hello World");
    }

    public bool IsReusable { get { return false; } }
  }
}