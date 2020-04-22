import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { IoIosAdd } from 'react-icons/io'

const Navigation = () => (
  <nav className="fixed w-full bottom-0 z-50 sm:relative">
    <Head>
      <meta charset="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1"
      />
      <title>My Notes</title>

      <link rel="manifest" href="/manifest.json" />
      <link
        href="/favicon-16x16.png"
        rel="icon"
        type="image/png"
        sizes="16x16"
      />
      <link
        href="/favicon-32x32.png"
        rel="icon"
        type="image/png"
        sizes="32x32"
      />
      <link rel="apple-touch-icon" href="/apple-icon.png"></link>
      <meta name="theme-color" content="#000000" />
    </Head>
    <ul className="flex justify-between items-center bg-gray-200 px-4 py-2 text-lg uppercase">
      <li>
        <Link href="/">
          <a className="block">My Notes</a>
        </Link>
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
