import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header"
import Footer from "./components/footer";
import SearchBar from "./components/search_bar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Culinary Coonekt",
  description: "Recipe Sharing Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header/>
        <div className="ml-10 min-h-screen bg-test4">
          <div className="relative">
            {children}
          </div>
          <SearchBar/>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
