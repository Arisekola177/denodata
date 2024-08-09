import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import 'leaflet/dist/leaflet.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Denodata || Business Solutions",
  description: "Retail Store Consultancy || Supermarket Set-Up || Inventory Managemnet || Retail Software || Staff Recruitment & Training || Suppliers Contacts & Product List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
