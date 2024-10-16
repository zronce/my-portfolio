import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set the SendGrid API Key globally (outside the function to avoid resetting in every invocation)
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Optimize the function by moving initialization and configuration outside the request handler
export async function POST(req) {
  try {
    // Parse the incoming request
    const body = await req.json();
    const { firstname, lastname, email, phone, purpose, message } = body;

    // Return early if validation fails (reduces processing time)
    if (!firstname || !lastname || !email || !phone || !purpose || !message) {
      return NextResponse.json({ success: false, message: 'All fields are required.' }, { status: 400 });
    }

    // Prepare the email content
    const msg = {
      to: process.env.EMAIL_USER,
      from: process.env.EMAIL_USER,
      subject: `New contact request from ${firstname} ${lastname}`,
      text: `You have a new contact request:\n
        Name: ${firstname} ${lastname}\n
        Email: ${email}\n
        Phone: ${phone}\n
        Purpose: ${purpose}\n
        Message: ${message}\n`,
      html: `
        <p>You have a new contact request:</p>
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Purpose:</strong> ${purpose}</p>
        <p><strong>Message:</strong><br/>${message}</p>`,
    };

    // Send the email and await the response
    const emailResponse = await sgMail.send(msg);

    // Check for successful email delivery
    if (emailResponse && emailResponse[0].statusCode === 202) {
      return NextResponse.json({ success: true, message: 'Email sent successfully.' }, { status: 200 });
    } else {
      throw new Error('Email not sent successfully');
    }
    
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error.message);

    // Return a specific error message for debugging purposes
    return NextResponse.json({ success: false, message: 'Failed to send email. Please try again.' }, { status: 500 });
  }
}
