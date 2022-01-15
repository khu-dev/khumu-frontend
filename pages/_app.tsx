import 'assets/style/index.scss'

import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'

import TokenProvider from '@context/Token'
import UserProvider from '@context/User'

import Loading from '@components/Loading'
import classnames from 'classnames'

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()

  const isMain = router.asPath.includes('main')

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Loading />
      <div
        className={classnames('app-outer-container', {
          bg__main: isMain,
        })}
      >
        <TokenProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </TokenProvider>
      </div>
    </>
  )
}

export default App
