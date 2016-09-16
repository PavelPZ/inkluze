namespace services.emailer {
  export interface sendEmailIN {
    from: string;
    to: string; //e.g. "Josef Novak"<josef@lm.cz>,"Jana K"<jana@lm.cz>
    cc?: string;
    bcc?: string;
    isBodyHtml?: boolean;
    body: string | JSX.Element;
    subject: string;
  }

  export function sendEMail(email: sendEmailIN, completed: lib.TCallback) {
    email.isBodyHtml = typeof email.body != "string";
    if (email.isBodyHtml) email.body = ReactDOMServer.renderToStaticMarkup(email.body as JSX.Element);
    services.callRequest('libs/service-emailer', email).then(() => completed()).catch(err => { throw new lib.Exception(err); });
  }

  //alert(ReactDOMServer.renderToStaticMarkup(<div>xxx</div>));
  //setTimeout(() => {
  //  debugger;
  //  alert(ReactDOMServer.renderToStaticMarkup(<div>xxx</div>));
  //});

}