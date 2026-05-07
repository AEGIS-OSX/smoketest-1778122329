import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "PawWalk | Early access for flexible urban dog walking",
  description:
    "Reliable walks, on your schedule. Join the waitlist for early access to PawWalk in your neighborhood.",
};

export const viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
