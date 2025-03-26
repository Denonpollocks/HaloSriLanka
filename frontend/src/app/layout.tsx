import { Jost } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/contexts/AuthContext';


const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  preload: true,
  fallback: ['sans-serif'],
  adjustFontFallback: true,
  
});

export const metadata = {
  title: 'Halo Holidays',
  description: 'Your trusted travel partner',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jost.variable}`}>
      <body className="min-h-screen flex flex-col py-2">
        <AuthProvider>
          <Navbar />
          
          <main className="flex-grow">
        
            {children}
         
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}