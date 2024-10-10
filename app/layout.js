import localFont from "next/font/local";
import "./globals.css";

import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import Footer from './components/Footer';
import ReduxProvider from "./ReduxProvider";

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

export default async function RootLayout({ children }) {

  // const { country, countryCode } = await getLocation();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
