import React from 'react'
import { GlobalProvider } from '~/context/GlobalState'
import Navigation from '~/components/Navigation'
import '~/assets/styles.css'

export default function NotesApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Navigation />
      <Component {...pageProps} />
    </GlobalProvider>
  )
}
