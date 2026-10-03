import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "SEOtriks - Actionable SEO",
  description: "Stop guessing. Start fixing what matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet" />
      </head>
      <body className="bg-background font-body-md text-on-surface antialiased min-h-screen flex flex-col">
        <Header />
        {children}
        <Footer />
        <script src="https://unpkg.com/aos@next/dist/aos.js" async></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.addEventListener('load', () => {
            if(window.AOS) {
              window.AOS.init({duration: 800, once: true});
            }
          });
        `}} />
      </body>
    </html>
  );
}
