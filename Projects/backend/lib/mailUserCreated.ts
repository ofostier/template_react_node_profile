import { createTransport, getTestMessageUrl } from 'nodemailer';

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeANiceEmail(name:string, text: string) {
  return `
    <div className="email" style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
    ">
      <h2>Hello ${name}!</h2>
      <p>${text}</p>

      <p>😘, The Admin</p>
    </div>
  `;
}

export interface MailResponse {
  accepted?: (string)[] | null;
  rejected?: (null)[] | null;
  envelopeTime: number;
  messageTime: number;
  messageSize: number;
  response: string;
  envelope: Envelope;
  messageId: string;
}
export interface Envelope {
  from: string;
  to?: (string)[] | null;
}


export async function sendEmailUserCreated(
  //resetToken: string,
  to: string,
  name: string
): Promise<void> {
  // email the user a token
  const info = (await transport.sendMail({
    to,
    from: process.env.MAIL_USER,
    subject: 'Welcome On Board TEMPLATE!',
    html: makeANiceEmail(name, `Your Account is now created!
      <a href="${process.env.FRONTEND_URL}/signin">Click Here to SignIn</a>
    `),
  })) as MailResponse;
  if(process.env.MAIL_USER.includes('ethereal.email')) {
    console.log(`💌 Message Sent!  Preview it at ${getTestMessageUrl(info)}`);

  }
}
