import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yang Mo — Mathematics and Computer Science",
  description:
    "Personal academic page of Yang Mo: research, projects, and publications in mathematics and computer science.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
