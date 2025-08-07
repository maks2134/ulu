import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
    title: "Для Ульяны",
    description: "Особенная история для особенного человека",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
        <body className={`${inter.variable} ${playfair.variable} bg-[#1a1d47] text-white font-sans`}>
        <Header />
        <main>{children}</main>
        </body>
        </html>
    );
}