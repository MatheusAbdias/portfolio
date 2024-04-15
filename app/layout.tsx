import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.matheusabdias.com/"),

  title: "Matheus Abdias",
  description:
    "Based in BR, I am a backend developer with a passion for creating scalable and maintainable software, with a focus on Python and Golang ecosystem.",
  openGraph: {
    title: "Matheus Abdias",
    description:
      "Based in BR, I am a backend developer with a passion for creating scalable and maintainable software, with a focus on Python and Golang ecosystem.",
    url: "https://dev.matheusabdias.com/",
    siteName: "Matheus Abdias",
    images: "/og.png",
    type: "website",
  },
  keywords: ["backend", "software", "developer", "python", "golang", "api"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SpaceGrotesk.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
