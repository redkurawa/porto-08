import { Resend } from 'resend';

import { EmailTemplate } from '@/components/email-template';

import logToServer from '@/lib/logger';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log('Incoming body:', body);
    logToServer('Incoming body:', { body });

    const { data, error } = await resend.emails.send({
      from: 'porto-8 <porto-8@resend.dev>',
      to: ['adisudana@gmail.com'],
      subject: `New message from ${name}`,
      react: EmailTemplate({ firstName: name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
