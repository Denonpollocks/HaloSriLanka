import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

// Add console.log to debug environment variables
console.log('Email Config:', {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASSWORD ? '****' : 'missing'
});

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD // Use your regular Outlook password
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
});

// Add verification
transporter.verify(function (error, success) {
  if (error) {
    console.log('SMTP Server verification error:', error);
  } else {
    console.log('SMTP Server is ready to take our messages');
  }
});

export const subscribe = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;

    // Email to subscriber
    const subscriberMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Welcome to Halo Holidays!',
      html: `
        <h2>Welcome to Halo Holidays, ${name}!</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You'll now receive exclusive offers and updates from us.</p>
        <p>Your special discount code for your first booking: <strong>WELCOME10</strong></p>
      `
    };

    // Notification email to admin
    const adminMail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Newsletter Subscription',
      html: `
        <h3>New Subscriber Details:</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
      `
    };

    await transporter.sendMail(subscriberMail);
    await transporter.sendMail(adminMail);

    res.status(200).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ message: 'Failed to process subscription' });
  }
}; 