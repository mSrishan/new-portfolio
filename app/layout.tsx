import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Srishan Mandawala | Software Engineer & GenAI Enthusiast",
  description:
    "Full-stack Software Engineer specializing in AI-powered applications, RAG systems, and modern web development. Building intelligent software solutions with React, Next.js, FastAPI, and LangChain.",
  keywords: [
    "Srishan Mandawala",
    "Software Engineer",
    "Full-Stack Developer",
    "GenAI",
    "RAG",
    "LangChain",
    "React",
    "Next.js",
    "Sri Lanka",
  ],
  authors: [{ name: "Srishan Mandawala" }],
  openGraph: {
    title: "Srishan Mandawala | Software Engineer",
    description:
      "Full-stack developer & GenAI enthusiast building AI-powered applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
