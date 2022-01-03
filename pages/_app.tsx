import 'assets/style/index.scss'

import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import TokenProvider from '@context/Token'
import UserProvider from '@context/User'

import Loading from '@components/Loading'
import { LoadingProvider } from '@context/Loading'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
    </Head>
    <Loading />
    <div className={'app-outer-container'}>
      <TokenProvider>
        <UserProvider>
          <LoadingProvider>
            <Component {...pageProps} />
          </LoadingProvider>
        </UserProvider>
      </TokenProvider>
    </div>
  </>
)

export default App
