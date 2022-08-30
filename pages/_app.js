import { memo } from "react";
import Head from "next/head";
import { Header, Footer } from "components";
import { AppWrapper } from "contexts";
import "styles/globals.css";

const App = ({ Component, pageProps }) => {
  const MemoComponent = memo(Component);
  return (
    <AppWrapper>
      <Head>
        <meta
          property="og:image"
          content="https://careers.tcstock.com.tw/images/banners/goodfinance_office_04.jpg"
        />
      </Head>
      <MemoComponent {...pageProps} />
    </AppWrapper>
  )
}

export default App;
