import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";


export const metadata: Metadata = {
  title: "Humberto López",
  description: "Created with NextJS 14",
  icons: { icon: '/favicon.ico' },
  applicationName: "Humberto López Portfolio",
  keywords: ['portfolio', 'Humberto López', 'humbertolopezdev@gmail.com'],
  twitter: {
    card: 'summary_large_image',
    title: "Humberto López Portfolio",
    description: "Get in touch with me",
    images: ['https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2']
  },
  openGraph: {
    title: 'Humberto López Portfolio',
    description: 'Desarrollador fullstack de software.',
    images: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    url: 'https://portfolio-hglt1998s-projects.vercel.app/es',
    type: 'website'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth flex flex-col min-h-screen">
      <body className="dark:bg-gray-900 h-screen">
        <Navbar />
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        <Footer />
      </body>
    </html>
  );
}
