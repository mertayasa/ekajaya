import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekajaya Lembongan | Comfortable Fast Ferry Transfers",
  description: "Experience premium comfort with our comfortable fast ferry transfers from Nusa Lembongan to Gili Islands, Lombok, Padang Bai, and Nusa Dua.",
  keywords: "comfortable fast ferry lembongan, comfortable ferry to gili, premium boat lombok, padang bai fast ferry, nusa dua transfer",
  icons: {
    icon: "/logoekajaya.png",
    apple: "/logoekajaya.png",
  },
  openGraph: {
    title: "Ekajaya Lembongan | Comfortable Fast Ferry Transfers",
    description: "Experience premium comfort with our comfortable fast ferry transfers from Nusa Lembongan to Gili Islands, Lombok, Padang Bai, and Nusa Dua.",
    type: "website",
    locale: "en_US",
    siteName: "Ekajaya Lembongan",
    images: [
      {
        url: "/logoekajaya.png",
        width: 800,
        height: 600,
        alt: "Ekajaya Lembongan Comfortable Fast Ferry",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-sand text-slate-900" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
