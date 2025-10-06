import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

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
