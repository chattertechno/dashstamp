import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// COMPONENTS ====================================

// METADATA ======================================
export const metadata = {
  title: "DashStamp",
  description:
    "A blockchain notary service on the Dash Network to prove and verify original documents",
};

// ===============================================
// LAYOUT: APP LAYOUT COMPONENT ==================
// ===============================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // RETURN =======================================
  return (
    <html lang="en">
      <body className={`text-[#1A1A1A] ${inter.className}`}>{children}</body>
    </html>
  );
}
