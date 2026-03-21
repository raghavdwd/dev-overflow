import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Overflow - A developer's blog and resource hub",
  description:
    "Dev Overflow is a blog and resource hub for developers, offering articles, tutorials, and tools to help you stay up-to-date with the latest trends and technologies in software development. Whether you're a beginner or an experienced developer, Dev Overflow has something for everyone. Our content covers a wide range of topics, including web development, mobile development, cloud computing, and more. We also offer a variety of resources, such as code snippets, cheat sheets, and downloadable tools to help you improve your skills and productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
