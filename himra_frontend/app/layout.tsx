import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Himra 1X",
  description: "Site fan consacre a l'univers de Himra.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
