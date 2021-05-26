import '@assets/style/App.scss';
import '@assets/style/Main.scss';
import '@assets/style/MyPage.scss';

import '@assets/style/Header.scss';
import '@assets/style/Skeleton.scss';

import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import StyleTag from '@components/Style';

import MainHeader from '@components/Header/Main';

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
      <MainHeader />
      <div className={'app-outer-container'}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
