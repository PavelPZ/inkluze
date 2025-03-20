using System;
using System.Configuration;
using System.Net.Mail;
using System.Web;


namespace services.emailer
{

    public class sendEMail : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            processRequest.run<sendEmailIN, serviceOUT>(context, inPar =>
            {
                MailMessage mailObj = new MailMessage();
                mailObj.From = new MailAddress(inPar.from);
                mailObj.To.Add(inPar.to);
                if (inPar.cc != null) mailObj.CC.Add(inPar.cc);
                if (inPar.bcc != null) mailObj.Bcc.Add(inPar.bcc);
                mailObj.IsBodyHtml = inPar.isBodyHtml;
                mailObj.Subject = inPar.subject;
                mailObj.Body = inPar.body;
                SmtpClient smtpClient = new SmtpClient(ConfigurationManager.AppSettings["Email.SmtpHost"], int.Parse(ConfigurationManager.AppSettings["Email.SmtpPort"]));
                smtpClient.Credentials = new System.Net.NetworkCredential(ConfigurationManager.AppSettings["Email.SmtpUsername"], ConfigurationManager.AppSettings["Email.SmtpPassword"]);
                smtpClient.EnableSsl = ConfigurationManager.AppSettings["Email.SmtpSsl"] == "true";
                try
                {
                    smtpClient.Send(mailObj);
                    //https://msdn.microsoft.com/en-us/library/system.net.mail.smtpexception.statuscode(v=vs.110).aspx
                }

                catch (Exception ex)
                {
                    return new serviceOUT { error = "Exception: " + ex.Message };
                    //Console.WriteLine("Exception caught in RetryIfBusy(): {0}", ex.ToString());
                }
                return null;
            });
        }

        public bool IsReusable { get { return true; } }
    }
}


