// import localFont from "next/font/local";


// const geistSans = localFont({
//   src: "../fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const Maglon = localFont({
//   src: "../fonts/Moglan.ttf",
//   variable: "--font-geist-sans",
// });

// const coco = localFont({
//   src: "../fonts/Cocogoose.ttf",
// });

export default function layout({ children }) {
  return (
    <html>
        <body>
            {children}
        </body>
    </html>
  )
}

