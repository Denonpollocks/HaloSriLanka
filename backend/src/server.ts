import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.routes';
import newsletterRoutes from './routes/newsletter.routes';
import contactRoutes from './routes/contact.routes';

dotenv.config();

console.log('Environment Check:', {
  port: process.env.PORT,
  emailConfigured: !!process.env.EMAIL_USER,
  emailUser: process.env.EMAIL_USER,
  emailPassword: process.env.EMAIL_PASSWORD
});

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/contact', contactRoutes); 