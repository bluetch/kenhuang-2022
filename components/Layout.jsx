import Head from "next/head";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { SITE_META_DESCRIPTION, SITE_TITLE, SITE_URL } from "constants/site";

export const Layout = ({
  children,
  title = SITE_TITLE,
  description = SITE_META_DESCRIPTION,
}) => {
  const pageTitle = title || SITE_TITLE;
  const pageDescription = description || SITE_META_DESCRIPTION;

  return (
    <div className="flex flex-col h-screen justify-between">
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:url" content={SITE_URL} />
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
    <div className={`container mx-auto lg:px-8 px-4 ${className}`}>{children}</div>
  )
}

export const HR = () =>{
  return(
    <hr className="lg:my-24 my-12" />
  )
}