'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/page";
import MainNav from "./components/Nav/MainNav";
import Nav from "./components/Nav/page";
import { usePathname } from 'next/navigation'
import Head from "next/head"; 

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "GamingGalaxy",
//   description: "Best Gaming Community In Nepal for buying and selling best quality gaming products!",
// };

export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (
    <html lang="en">
      {/* <Head>
        <title>GamingGalaxy</title>
        <meta name="description" content="Best Gaming Community in Nepal!" />
      </Head> */}
      <body className={inter.className}>
        {pathname === "/" ? <Nav /> : <MainNav />}
        {children}
        <Footer />
      </body>
    </html>
  );
}
