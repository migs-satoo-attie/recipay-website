import type { Metadata } from "next";
import "src/app/globals.css";

export const metadata: Metadata = {
  title: "recipay-website",
  description: "tcc-web_by-attie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
