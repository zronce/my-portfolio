import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req) {
  try {
    const { firstname, lastname, email, phone, purpose, message } = await req.json();

    // Validate the required fields
    if (!firstname || !lastname || !email || !phone || !purpose || !message) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

    // Compose email
    const msg = {
      to: process.env.EMAIL_USER, // Change to your recipient
      from: process.env.EMAIL_USER, // Change to your verified sender email
      subject: `New contact request from ${firstname} ${lastname}`,
      text: `
        You have a new contact request:
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Purpose: ${purpose}
        Message: ${message}
      `,
      html: `
        <p>You have a new contact request:</p>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Send email
    await sgMail.send(msg);

    return NextResponse.json({ success: true, message: 'Email sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error.message);
    return NextResponse.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
