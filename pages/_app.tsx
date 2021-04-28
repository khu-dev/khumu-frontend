import { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

import { AppType } from '@interfaces/app';

import '@assets/css/app.css';
import '@assets/css/scroll.css';

import Layout from '@components/layout';

const App = ({ Component, pageProps }: AppType) => {
  return (
    <Container>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Container>
  );
};

export default App;
