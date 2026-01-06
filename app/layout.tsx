import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Premium Developer Portfolio | Modern Web Development",
    description: "A stunning portfolio showcasing cutting-edge web development projects with glassmorphism design and smooth animations. Built with Next.js, TypeScript, and Tailwind CSS.",
    keywords: ["portfolio", "web developer", "next.js", "react", "typescript", "tailwind"],
    authors: [{ name: "Your Name" }],
    openGraph: {
        title: "Premium Developer Portfolio",
        description: "Explore my cutting-edge web development projects",
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
