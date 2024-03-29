import { Inter } from "@next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <main> {children}</main>
       
        <Toaster position="top-right" autoClose={3000} hideProgressBar />
      </body>
    </html>

  );
}
