import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from './components/Footer';
import ReduxProvider from "./ReduxProvider";


const Gatte = localFont({
  src: "./fonts/GatteModern-Medium.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});


export const metadata = {
  title: "ShopSphere",
  description: "demo e-commerce website created by amine",
};

export default async function RootLayout({ children }) {

  // const { country, countryCode } = await getLocation();

  return (
    <html lang="en">
      <body
        className={` ${Gatte.variable} antialiased`}
      >
        <ReduxProvider>
          <Header />
          <SideMenu />
          {children}
          <Footer />
        </ReduxProvider>
        
      </body>
    </html>
  );
}
