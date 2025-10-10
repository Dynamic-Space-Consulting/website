import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { Toaster } from "sonner";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Dynamic Space Consulting",
  description: "Innovative Solutions for a Changing World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YNE3250X3N"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YNE3250X3N');
          `}
        </Script>
      </head>
      <body className={`font-inter antialiased max-w-[90rem] mx-auto bg-white`}>
        {children}
        <Toaster position="bottom-right" theme="light" richColors />
        <br />
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
