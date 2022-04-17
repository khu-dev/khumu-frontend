import 'assets/style/index.scss'

import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AppProps } from 'next/app'
import classnames from 'classnames'

import TokenProvider from '@context/Token'
import UserProvider from '@context/User'
import { PopupProvider } from '@context/Popup'

import Loading from '@components/Common/Loading'

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
            <PopupProvider>
              <Component {...pageProps} />
            </PopupProvider>
          </UserProvider>
        </TokenProvider>
      </div>
    </>
  )
}

export default App
