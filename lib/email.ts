import nodemailer from 'nodemailer';
import { generateContactFormEmail, generateAutoReplyEmail } from './email-templates';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface SendEmailProps {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export async function sendContactFormEmails(data: SendEmailProps) {
  try {
    // Send notification to admin
    const adminEmail = generateContactFormEmail(data);
    await transporter.sendMail({
      from: `"IEC Services" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL || 'info@iecservices.org',
      ...adminEmail,
    });

    // Send auto-reply to user
    const userEmail = generateAutoReplyEmail(data.name);
    await transporter.sendMail({
      from: `"IEC Services" <${process.env.SMTP_FROM_EMAIL}>`,
      to: data.email,
      ...userEmail,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}