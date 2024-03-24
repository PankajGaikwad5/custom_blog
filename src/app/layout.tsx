import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/app/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Custom Blog',
  description: 'Custom Blogging Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className='pt-20 w-full'>{children}</div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
