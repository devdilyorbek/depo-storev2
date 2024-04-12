import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/site/navbar";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Categories from "@/components/site/categories";
import { SearchBar } from "@/components/site/searchBar";
import Footer from "@/components/site/footer";
import Contact from "@/components/site/contact";
import { heroHeader } from "@/config/contents";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://depo-store.vercel.app"),
  title: "DEPO store | DUMMY API ",
  description: heroHeader.header,
  authors: [
    { name: "Dilyorbek Asfandiyorov", url: "https://depo-store.vercel.app" },
  ],

  icons: {
    icon: "https://raw.githubusercontent.com/dilyorbek777/depo-store/main/public/logo.png",
  },
  keywords:
    "dilyorbekdev, depo,  programming, store, depo store, depopay, depo-stroe, pstroe, store depo-pay, prime, pay, dilyorbek asfandiyorov, depohub, DEPOPAY, e-wallet, is, a, modern, payment, tool, ",
  openGraph: {
    countryName: "Uzbekistan",
    siteName: "DEPO store | DUMMY API ",

    emails: "dilyorbekdev@gmail.com",
    title: "DEPO store | DUMMY API ",

    description: heroHeader.header,
    
    type: "website",
    url: "https://depo-store.vercel.app",
    locale: "en_EN",
    images:
      "https://raw.githubusercontent.com/dilyorbek777/depo-pay/main/public/depo-pay.png",
  },
  creator: "Dilyorbek Asfandiyorov",
  publisher: "DEPO ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <SearchBar />

          <Categories />
          {children}
          <Contact />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
