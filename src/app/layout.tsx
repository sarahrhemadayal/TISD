// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import Footer from "@/components/Footer";  // fixed import
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextGenLegal",
  description: "Securely create and store your legal documents online",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
