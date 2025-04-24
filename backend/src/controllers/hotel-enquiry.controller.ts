import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false
  }
});

export const sendHotelEnquiry = async (req: Request, res: Response) => {
  try {
    const { hotelName, name, email, phone, checkIn, checkOut, guests, message, currentUrl } = req.body;

    // Email to admin
    const adminMail = {
      from: process.env.EMAIL_USER,
      to: 'saad@haloflights.co.uk',
      subject: `New Hotel Enquiry: ${hotelName}`,
      html: `
        <h3>New Hotel Enquiry Received</h3>
        <p><strong>Hotel:</strong> ${hotelName}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p><strong>Enquiry Source:</strong> <a href="${currentUrl}">${currentUrl}</a></p>
      `
    };

    // Confirmation email to customer
    const customerMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for your enquiry about ${hotelName}`,
      html: `
        <h2>Thank you for your enquiry, ${name}!</h2>
        <p>We have received your enquiry about ${hotelName} and will get back to you shortly.</p>
        <h3>Your Enquiry Details:</h3>
        <p><strong>Hotel:</strong> ${hotelName}</p>
        <p><strong>Check-in:</strong> ${checkIn}</p>
        <p><strong>Check-out:</strong> ${checkOut}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,<br>Halo Holidays Team</p>
      `
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(customerMail);

    res.status(200).json({ message: 'Enquiry sent successfully!' });
  } catch (error) {
    console.error('Hotel enquiry error:', error);
    res.status(500).json({ message: 'Failed to send enquiry' });
  }
}; 