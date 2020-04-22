import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { IoIosAdd } from 'react-icons/io'
import PWAInstallButton from './PWAInstallButton'

const Navigation = () => (
  <nav className="fixed w-full bottom-0 z-50 sm:relative">
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

      {/* <link
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
      /> */}
    </Head>
    <ul className="flex justify-between items-center bg-gray-200 px-4 py-2 text-lg uppercase">
      <li>
        <Link href="/">
          <a className="block">My Notes</a>
        </Link>
      </li>
      <li>
        <PWAInstallButton />
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

export default Navigation
