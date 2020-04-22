import React from 'react'
import Head from 'next/head'
import { GlobalProvider } from '~/context/GlobalState'
import Navigation from '~/components/Navigation'
import '~/assets/styles.css'

export default function NotesApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Head>
        <link rel="manifest" href="/manifest.json" />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Notes" />
        <meta name="apple-mobile-web-app-title" content="Notes" />
        <meta name="msapplication-starturl" content="/" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/icons/icon-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="512x512"
          href="/images/icons/icon-512x512.png"
        />
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </GlobalProvider>
  )
}
