import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Providers } from './providers'
import FilterProvider from "./FilterProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JapBook",
  description: "If you want any Japanese books, they exist in our shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Providers>
          <FilterProvider>
            <Navbar />
            {children}
          </FilterProvider>
        </Providers>
      </body>
    </html>
  );
}
