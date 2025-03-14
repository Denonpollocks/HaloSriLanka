import ContactForm from './ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Halo Holidays',
  description: "Get in touch with our team for personalized travel planning.",
  keywords: 'contact Halo Holidays, travel support, holiday planning, Sri Lanka travel contact',
};

export default function ContactPage() {
  return <ContactForm />;
}