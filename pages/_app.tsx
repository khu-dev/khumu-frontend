import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import '@assets/style/Header.scss';

import MainHeader from '@components/Header/Main';
import { AppStyle, SkeletonStyle } from '@components/Style';
import MainStyleTag from '@components/Style/Main';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <AppStyle />
        <MainStyleTag />
        <SkeletonStyle />
      </Head>
      <MainHeader />
      <div className={'app-outer-container'}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
