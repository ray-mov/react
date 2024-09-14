
import "./globals.css";
import Navigation from "./_components/navigation";

import { Roboto, Poppins } from "next/font/google";
import Footer from "./_components/footer/Footer";
import { CartProvider } from "./_components/context/CartContext";
import { Toaster } from "react-hot-toast";
import { ProductProvider } from "./_components/context/ProductContext";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '300', '500', '700', '900'],
  variable: "--font-roboto"
})

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
})

export const metadata = {
  title: "Clothixs Shop Website",
  description: "Presenting to you, our freshest collection of oversized tees for men. Pair it up with versatile bottom wear and slay every occasion. These can be used as a metaphor for ‘comfort paired",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ProductProvider>

          <CartProvider>
            <Navigation />
            <Toaster
              position="top-center"
              reverseOrder={false}
            />
            {children}
            <Footer />
          </CartProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
