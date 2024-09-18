import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from './components/Footer'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "demo shop",
  description: "demo e-commerce website created by amine",
};

// async function getLocation() {
//  return await fetch('https://api.ipify.org?format=json')
//         .then(response => response.json())
//         .then(data => {
//             fetch(`http://ip-api.com/json/${data.ip}`)
//             .then(res => res.json())
//         })
// }

export default async function RootLayout({ children }) {

  // const { country, countryCode } = await getLocation();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <SideMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
