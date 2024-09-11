import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from 'next/font/google';
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-mont'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen h-full`}>
      <Navbar />
      <Component {...pageProps} key={`page-${pageProps.key}`} />
      <Footer />
    </main>
  )
}