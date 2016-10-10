using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace rewise.repository {
  /// <summary>
  /// Summary description for data_delete
  /// </summary>
  public class data_delete : IHttpHandler {

    public void ProcessRequest(HttpContext context) {
      context.Response.ContentType = "text/plain";
      context.Response.Write("Hello World");
    }

    public bool IsReusable {
      get {
        return false;
      }
    }
  }
}