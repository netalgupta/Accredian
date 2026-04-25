import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { BackToTopButton } from "@/components/ui/BackToTopButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Teams at Scale",
  description:
    "India's leading enterprise learning platform. Custom programs, world-class mentors, and measurable ROI for 500+ companies and 50,000+ learners.",
  keywords: [
    "enterprise learning",
    "corporate training",
    "upskilling",
    "L&D",
    "Accredian",
    "team training",
    "online courses",
  ],
  authors: [{ name: "Accredian" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://enterprise.accredian.com",
    title: "Accredian Enterprise | Upskill Your Teams at Scale",
    description:
      "Custom enterprise learning programs with 200+ mentors. Trusted by Razorpay, Swiggy, Infosys and 500+ companies.",
    siteName: "Accredian Enterprise",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accredian Enterprise",
    description: "Upskill your teams with India's leading enterprise learning platform.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#020817" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans bg-slate-950 dark:bg-slate-950 text-white dark:text-white antialiased transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgressBar />
          <BackToTopButton />
          {children}
          <Toaster
            position="top-right"
            theme="dark"
            richColors
            closeButton
            toastOptions={{
              style: {
                background: "rgba(15, 23, 42, 0.95)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
                backdropFilter: "blur(12px)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
