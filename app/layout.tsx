import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samyeak Maharjan - Software Engineer",
  description: "Full-stack .NET developer with 7+ years' experience in building scalable ERP and fintech platforms. Specialized in C#, .NET Core, SQL Server, and modern web technologies.",
  keywords: ["software engineer", "full stack developer", ".NET", "C#", "SQL Server", "React", "microservices", "Nepal"],
  authors: [{ name: "Samyeak Maharjan" }],
  openGraph: {
    title: "Samyeak Maharjan - Software Engineer",
    description: "Full-stack .NET developer specializing in enterprise applications and fintech platforms",
    url: "https://samyeak.com.np",
    siteName: "Samyeak Maharjan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
