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
          content="https://kenhuang.tw/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkenhuang_portrait.49e86ef1.png&w=1200&q=75"
        />
      </Head>
      <MemoComponent {...pageProps} />
    </AppWrapper>
  )
}

export default App;
