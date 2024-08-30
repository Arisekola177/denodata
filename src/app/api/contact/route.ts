import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


async function sendMail({ to, subject, body, from }: { to: string; subject: string; body: string; from: string }) {
  const { SMTP_EMAIL, SMTP_GMAIL_PASS } = process.env;

  if (!SMTP_EMAIL || !SMTP_GMAIL_PASS) {
    console.error("Missing SMTP credentials in environment variables");
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_GMAIL_PASS,
    },
  });

  try {
    // Send the email
    const sendResult = await transporter.sendMail({
      from: SMTP_EMAIL, // Use the company's email as the sender
      to: to,
      subject: subject,
      html: body,
      replyTo: from, 
    });
    console.log("Email sent successfully:", sendResult);
  } catch (error) {
    console.error("Error occurred while sending email:", error);
  }
}


export async function POST(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { fullname, email, phone, message } = body;

    const emailSubject = "New Contact Form Submission";
    const emailBody = `
      <h1>Contact Form Submission</h1>
      <p><strong>Name:</strong> ${fullname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Send the email using the sendMail function
    await sendMail({
      from: email, 
      to: "shuaibazeez14@gmail.com", 
      subject: emailSubject,
      body: emailBody,
    });

    return NextResponse.json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Error occurred while sending message:', error);

    return NextResponse.json(
      { error: 'An error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
