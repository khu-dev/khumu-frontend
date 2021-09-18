import 'assets/style/index.scss';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import StyleTag from '@components/Style';

import Loading from '@components/Loading';

import TokenProvider from '@context/Token';
import UserProvider from '@context/User';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <StyleTag />
    </Head>
    <Loading />
    <div className={'app-outer-container'}>
      <TokenProvider>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </TokenProvider>
    </div>
  </>
);

export default App;

export const getServerSideProps = async (ctx) => {
  console.log('app ssr,', ctx.req.header);

  return {
    props: {
      data: null,
    },
  };
};
