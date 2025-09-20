import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Schedule Lab",
  description: "Unofficial website Schedule I toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children}
        </main>
        <footer>
        </footer>
      </body>
    </html>
  );
}
