import React from 'react'
import { GlobalProvider } from '../context/GlobalState'
import Nav from '../components/Nav'
import '../assets/styles.css'

export default function NotesApp({ Component, pageProps }) {
  return (
    <GlobalProvider>
      <Nav />
      <Component {...pageProps} />
    </GlobalProvider>
  )
}
