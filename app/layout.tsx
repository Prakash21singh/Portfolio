import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import CustomLayoutProvider from "@/providers/custom-layout-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prakash Kumar Singh | Portfolio",
    template: "%s | Prakash Kumar Singh",
  },
  description:
    "Personal portfolio of Prakash Kumar Singh — showcasing projects, skills, and experience in software development.",
  keywords: [
    "Prakash Kumar Singh",
    "Portfolio",
    "Software Developer",
    "Full Stack Developer",
    "Web Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Prakash Kumar Singh" }],
  creator: "Prakash Kumar Singh",
  metadataBase: new URL("https://prakash.scriptss.in"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prakash.scriptss.in",
    siteName: "Prakash Kumar Singh",
    title: "Prakash Kumar Singh | Portfolio",
    description:
      "Personal portfolio of Prakash Kumar Singh — showcasing projects, skills, and experience in software development.",
    images: [
      {
        url: "/me.jpg",
        width: 800,
        height: 800,
        alt: "Prakash Kumar Singh - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakash Kumar Singh | Portfolio",
    description:
      "Personal portfolio of Prakash Kumar Singh — showcasing projects, skills, and experience in software development.",
    images: ["/me.jpg"],
    creator: "@Prakash87096639",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomLayoutProvider>{children}</CustomLayoutProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
