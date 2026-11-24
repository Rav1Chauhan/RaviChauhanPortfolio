
import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/context/ThemeContext";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  title: "Ravi Chauhan | Blockchain & Web3 Developer",
  description:
    "Ravi Chauhan is a Blockchain and Web3 Developer focused on Solidity, Ethereum, Rust, Solana, and building decentralized applications.",
  openGraph: {
    title: "Ravi Chauhan | Blockchain & Web3 Developer",
    description:
      "Building decentralized applications and exploring blockchain technology.",
    url: "https://YOUR-PORTFOLIO-DOMAIN.vercel.app",
    siteName: "Ravi Chauhan Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Preloader />
          <CustomCursor />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
