import * as React from "react";
import Head from "next/head";
import { Footer } from "components/Footer";
import { Header } from "components/Header";

export const Layout = ({ children, title = "Ken Huang | " }) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>{`${title}`}</title>
        <meta charSet="utf-8" />
        <meta name="description" content="美好證券內部網站" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content={`https://good-note.tcstock.com.tw`} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className={`mscroll-smooth relative mb-auto`}>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export const Container = ({ className = "", children }) => {
  return (
    <div className={`container mx-auto px-8 ${className}`}>{children}</div>
  )
}