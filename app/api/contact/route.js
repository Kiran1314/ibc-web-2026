import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, service, project } = body;

    // Configure Hostinger SMTP
    const transporter = nodemailer.createTransport({
  host: 'smtp.hostinger.com',
 port: 465,
secure: true, // Must be false for 587
  auth: {
    user: 'info@ibcstudio.com',
    pass: process.env.SMTP_PASSWORD // or your string while testing
  },
  // ADD THIS BLOCK:
  tls: {
    rejectUnauthorized: false 
  }
});
    // HTML Email Template
    const mailOptions = {
      from: 'info@ibcstudio.com', // Must match the authenticated user above
      to: 'info@ibcstudio.com', // Where you want to receive the enquiry
      replyTo: email, // Clicking "Reply" in your email client will reply to the customer
      subject: `New ${service || 'Enquiry'} from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #333; margin-top: 0;">New Enquiry From Website</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666; width: 120px;"><strong>Name:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Email:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">
                <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Phone:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Company:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #666;"><strong>Service:</strong></td>
              <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${service || 'General Enquiry'}</td>
            </tr>
          </table>

          <h3 style="color: #444; margin-bottom: 10px;">Project Details</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; color: #333; line-height: 1.6; white-space: pre-wrap;">${project}</div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}