import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/layouts/header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
    title: "Flashcard",
    description: "A flashcard app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${GeistSans.variable} ${GeistMono.variable}`}
        >
            <body>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
