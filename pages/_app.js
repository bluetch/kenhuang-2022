import { memo } from "react";
import Head from "next/head";
import { useEffect } from "react";
import TagManager from 'react-gtm-module';
import { AppWrapper } from "contexts";
import "styles/globals.css";

const App = ({ Component, pageProps }) => {
  const MemoComponent = memo(Component);
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-MWXSCRM' });
  }, []);
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
