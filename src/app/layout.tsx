import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { Footer } from "@/components/layout/footer";
import { AppHeader } from "@/components/layout/app-header";
import { createClient } from "@/utils/supabase/server";
import { getSubscriptionStatus } from '@/utils/actions/stripe/actions';
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://TalantaLM.com"),
  title: {
    default: "TalantaLM - AI-Powered Resume Builder",
    template: "%s | TalantaLM"
  },
  description: "Create tailored, ATS-optimized resumes powered by AI. Land your dream tech job with personalized resume optimization.",
  applicationName: "TalantaLM",
  keywords: ["resume builder", "AI resume", "ATS optimization", "tech jobs", "career tools", "job application"],
  authors: [{ name: "TalantaLM" }],
  creator: "TalantaLM",
  publisher: "TalantaLM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  // manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    siteName: "TalantaLM",
    title: "TalantaLM - AI-Powered Resume Builder",
    description: "Create tailored, ATS-optimized resumes powered by AI. Land your dream tech job with personalized resume optimization.",
    images: [
      {
        url: "/og.webp",
        width: 1200,
        height: 630,
        alt: "TalantaLM - AI Resume Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TalantaLM - AI-Powered Resume Builder",
    description: "Create tailored, ATS-optimized resumes powered by AI. Land your dream tech job with personalized resume optimization.",
    images: ["/og.webp"],
    creator: "@TalantaLM",
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
  // verification: {
  //   google: "google-site-verification-code", // Replace with actual verification code
  // },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  
  let showUpgradeButton = false;
  if (user) {
    try {
      const profile = await getSubscriptionStatus();
      // Show upgrade button only if user is not on pro plan or has canceled
      showUpgradeButton = !profile?.subscription_plan?.toLowerCase()?.includes('pro') || 
                         profile?.subscription_status === 'canceled';
    } catch {
      // If there's an error, we'll show the upgrade button by default
      showUpgradeButton = true;
    }
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen h-screen flex flex-col">
          {user && <AppHeader showUpgradeButton={showUpgradeButton} />}
          {/* Padding for header and footer */}
          <main className="py-14 h-full">
            {children}
            <Analytics />
          </main>
          {user && <Footer /> }
        </div>
        <Toaster 
          richColors 
          position="top-right" 
          closeButton 
          toastOptions={{
            style: {
              fontSize: '1rem',
              padding: '16px',
              minWidth: '400px',
              maxWidth: '500px'
            }
          }}
        />
      </body>
    </html>
  );
}
