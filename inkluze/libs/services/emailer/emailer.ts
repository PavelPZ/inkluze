namespace services.emailer {
  export interface sendEmailIN {
    from: string;
    to: string; //e.g. "Josef Novak"<josef@lm.cz>,"Jana K"<jana@lm.cz>
    cc?: string;
    bcc?: string;
    isBodyHtml?: boolean;
    body: string;
    subject: string;
  }

  export function sendEMail(email: sendEmailIN, completed: lib.TCallback) {
    services.callRequest('libs/services/emailer', email).then(() => completed()).catch(err => { throw new lib.Exception(err); });
  }
}