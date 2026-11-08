import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Escalate OS \u2014 Governance Intelligence Platform",
  description: "The Governance Intelligence Platform for Malaysia's most critical organizations. From signal to decision to accountability.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
