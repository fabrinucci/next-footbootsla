import { FC, ReactNode } from "react";
import { Header } from '../header/Header';
import Head from "next/head";
import { Footer } from "../footer/Footer";

interface Layout {
  children: ReactNode;
}

export const Layout: FC<Layout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>FootBootsla</title>
        <meta name="description" content="FootBootsla is a football boots web shop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
