import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/Components/theme-provider";
import Navbar from "./Components/Navbar";
import { Footer } from "@/app/Components/Footer";
import { MenuResponsivo } from "./Components/MenuResponsivo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MenuResponsivo></MenuResponsivo>
          <main className="  ">{children}</main>
          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
