import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Budol Finds PH | Viral Shopee Deals",
  description:
    "Trending Shopee gadgets, smart home finds, and viral products",

  verification: {
    google: "klmQqCWfqLaBjVQLJl-soCMDlU5NkkDo2FqKoIfyLHc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}