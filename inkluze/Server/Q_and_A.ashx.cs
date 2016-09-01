using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Mail;
using System.Web;
using System.Configuration;


namespace inkluze.Server {

  public class Q_and_A : IHttpHandler {

    public void ProcessRequest(HttpContext context) {
      var res = context.Request.ToString();
      using (var rdr = new StreamReader(context.Request.InputStream)) {
        context.Response.ContentType = "application/json";
        Dictionary<string, string> jsonObj;
        try {
          var json = rdr.ReadToEnd();
          jsonObj = JsonConvert.DeserializeObject<Dictionary<string, string>>(json);
          MailMessage mailObj = new MailMessage("qa@langmaster.cz", "info@langmaster.cz", "Inkluze: Q&A", json);
          SmtpClient smtpClient = new SmtpClient(ConfigurationManager.AppSettings["Email.SmtpHost"], int.Parse(ConfigurationManager.AppSettings["Email.SmtpPort"]));
          smtpClient.Credentials = new System.Net.NetworkCredential(ConfigurationManager.AppSettings["Email.SmtpUsername"], ConfigurationManager.AppSettings["Email.SmtpPassword"]);
          smtpClient.EnableSsl = ConfigurationManager.AppSettings["Email.SmtpSsl"] == "true";
          smtpClient.Send(mailObj);
        } catch (Exception err) {
          jsonObj = new Dictionary<string, string>{ { "error", err.Message } };
        }
        context.Response.Write(JsonConvert.SerializeObject(jsonObj));
      }
    }

    public bool IsReusable { get { return false; } }
  }
}
