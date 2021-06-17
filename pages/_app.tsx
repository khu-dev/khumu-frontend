import 'assets/style/index.scss';

import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import StyleTag from '@components/Style';

import MainHeader from '@components/Header/Main';
import Loading from '@components/Loading';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <StyleTag />
      </Head>
      <Loading />
      <MainHeader />
      <div className={'app-outer-container'}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
