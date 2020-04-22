import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { IoIosAdd } from 'react-icons/io'

const Navigation = () => {
  const deferredPrompt = useRef(null)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later.
      deferredPrompt.current = e
    })
  })

  const installPWA = () => {
    if (!deferredPrompt.current) return
    deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt')
      } else {
        console.log('User dismissed the install prompt')
      }
    })
  }
  return (
    <nav className="fixed w-full bottom-0 z-50 sm:relative">
      <Head>
        <link rel="manifest" href="manifest.json" />

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
          href="images/icons/icon-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="512x512"
          href="images/icons/icon-512x512.png"
        />
      </Head>
      <ul className="flex justify-between items-center bg-gray-200 px-4 py-2 text-lg uppercase">
        <li>
          <Link href="/">
            <a className="block">My Notes</a>
          </Link>
        </li>
        <li>
          <button type="button" onClick={installPWA}>
            Install
          </button>
        </li>
        <li>
          <Link href="/add">
            <a
              className="block text-5xl text-green-600"
              title="Add Note"
              data-cy="nav-add-note"
            >
              <IoIosAdd />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
