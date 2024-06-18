// Import the Metadata type from "next"
import type { Metadata } from "next";
import "./globals.css";
import { fontJose } from "./fonts";
import { cn } from "@/lib/utils";

// Define the base URL
const baseUrl = 'process.env.NEXT_PUBLIC_SERVER_URL' ??'';

// Global SEO
export const metadata: Metadata = {
  applicationName: 'Tailwindcss designui',
  keywords: ['nextjs', 'reactjs', 'frontenddesign', 'y3htet'],
  authors: [{ name: 'y3htet', url: 'https://github.com/y3htet' }],
  publisher: 'netlify',

  alternates: {
    canonical: '/',
    languages: {
      'en': 'en'
    }
  },

  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      noimageindex: false
    }
  },

  // Concatenate the baseUrl with the manifest path
  manifest: `${baseUrl}/manifest.json`,

  icons: {
    icon: "/logo/anb.png",
    shortcut: "/logo/anb.png",
    apple: "/logo/anb.png",
  },

  twitter: {
    card: "summary_large_image",
    title: "A New Burma",
    description: "A New Burma is a term that encapsulates the transformative journey of Myanmar, formerly known as Burma, as it navigates the complexities of modern statehood and development. Emerging from decades of military dictatorship, Myanmar has embarked on a challenging path toward democracy, economic revitalization, and social cohesion.",
    siteId: "",
    creator: "y3htet",
    // Concatenate the baseUrl with the image path
    images: [`${baseUrl}/images/social-media.png`]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn
        ('min-h-screen bg-black text-white text-xs',
        fontJose.className)}>
        {children}
      </body>
    </html>
  );
}
