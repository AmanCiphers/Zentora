import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zentora — Streamlined Event Planning",
  description:
    "Eliminate the chaos of event planning. Registration, scheduling, announcements, and check-ins — all in one streamlined platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#f7f7f3] font-sans antialiased flex flex-col">
        <div className="bg-black px-4 py-2.5 text-center text-sm font-bold text-white shadow-lg">
          ⚠️ This app is currently under development — most features may not work as expected. All displayed data is hypothetical/demo data. ⚠️
        </div>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
