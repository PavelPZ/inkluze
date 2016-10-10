using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace rewise.repository {
  /// <summary>
  /// Summary description for get_data
  /// </summary>
  public class data_read : IHttpHandler {

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