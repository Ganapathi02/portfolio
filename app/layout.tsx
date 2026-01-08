import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Ganapathi",
    description: "Portfolio of Ganapathi V - Front-End Developer specializing in modern web development with React, Next.js, TypeScript, and Tailwind CSS.",
    keywords: ["Ganapathi V", "portfolio", "front-end developer", "web developer", "next.js", "react", "typescript", "tailwind"],
    authors: [{ name: "Ganapathi V" }],
    openGraph: {
        title: "Ganapathi V | Front-End Developer",
        description: "Explore my web development projects and skills",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className={inter.className}>
                {children}
            </body>
        </html>
    );
}
