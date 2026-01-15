import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

// Professional fonts: Inter for reading, Space Grotesk for headings
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Ebenebe Emmanuel Chidera | Fullstack Engineer',
  description:
    'Fullstack Developer specializing in Next.js, React, and Scalable Web Architecture. Builder of Morphify.',
  keywords: [
    'Next.js Developer',
    'React',
    'Fullstack Engineer',
    'Web3',
    'Solana',
    'Nigeria',
  ],
  openGraph: {
    title: 'Ebenebe Emmanuel Chidera - Fullstack Engineer',
    description:
      'Building pixel-perfect web experiences with modern architecture.',
    url: 'https://your-portfolio-url.com',
    siteName: 'Ebenebe Emmanuel Portfolio',
    images: [
      {
        url: '/og-image.png', // You'll add this image to your public folder later
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='scroll-smooth'>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} bg-black text-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
