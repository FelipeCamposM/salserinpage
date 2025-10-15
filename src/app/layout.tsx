import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/(Header)/Header";
import Footer from "./components/(Footer)/Footer";
import { ThemeProvider } from "@/hooks/use-theme";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Salserin",
  description: "Venha aproveitar no Salserin!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${montserrat.variable} font-sans antialiased`} cz-shortcut-listen="true">
        <ThemeProvider defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
