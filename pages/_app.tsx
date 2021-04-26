import Head from 'next/head';
import { OuterContainer } from '@components/utils/styles/container.styled';
import Header from '@components/header';
import { AppType } from '@interfaces/app';

import '@assets/css/app.css';
import '@assets/css/scroll.css';

const App = ({
  Component,
  pageProps,
}: // router: { pathname }
AppType) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <OuterContainer>
        <Header
        // pathname={pathname}
        />
        <Component {...pageProps} />
      </OuterContainer>
    </>
  );
};

export default App;
