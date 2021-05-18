import Head from 'next/head';
import React from 'react';
import styled from '@emotion/styled';

import { AppType } from '@interfaces/app';

import '@assets/style/App.scss';
import '@assets/style/Main.scss';
import '@assets/style/Skeleton.scss';

import '@assets/style/Header.scss';

import MainHeader from '@components/Header/Main';

export default function App({ Component, pageProps }: AppType) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <MainHeader />
      <div className={'app-outer-container'}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
