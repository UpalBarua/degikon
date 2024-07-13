import { Providers } from "@/components/providers";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
import { roboto } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Degikon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="!scroll-smooth dark"
      style={{ scrollBehavior: "smooth" }}
    >
      <body
        className={cn(
          roboto.className,
          "relative min-h-screen overflow-x-hidden text-foreground/90 antialiased",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
