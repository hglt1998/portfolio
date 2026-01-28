import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Humberto López',
  description: 'Created with NextJS 14',
  icons: { icon: '/favicon.ico' },
  applicationName: 'Humberto López Portfolio',
  keywords: ['portfolio', 'Humberto López', 'humbertolopezdev@gmail.com'],
  twitter: {
    card: 'summary_large_image',
    title: 'Humberto López Portfolio',
    description: 'Get in touch with me',
    images: [
      'https://firebasestorage.googleapis.com/v0/b/bandstats-4d059.firebasestorage.app/o/metaImage.webp?alt=media&token=458417a0-fc8c-4c8c-8e15-8eca9d0510d3',
    ],
  },
  openGraph: {
    title: 'Humberto López Portfolio',
    description: 'Desarrollador fullstack de software.',
    images:
      'https://firebasestorage.googleapis.com/v0/b/bandstats-4d059.firebasestorage.app/o/metaImage.webp?alt=media&token=458417a0-fc8c-4c8c-8e15-8eca9d0510d3',
    url: 'https://portfolio-hglt1998s-projects.vercel.app/es',
    type: 'website',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  return (
    <html lang={locale} className='scroll-smooth'>
      <body className='dark:bg-gray-900 flex flex-col min-h-screen'>
        <Analytics />
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className='flex-grow'>{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
