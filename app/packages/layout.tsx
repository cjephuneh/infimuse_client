import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Navbar from "@/components/Navbar";
import { Provider } from 'react-redux';
import store from '@/redux/store';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inifimuse",
  description: "Infimuse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <><Navbar /><html lang="en">
      {/* <Provider store={store}> */}
      <body className={inter.className}>{children}</body>
      {/* </Provider> */}
    </html></>
  );
}
