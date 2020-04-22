import React from 'react'
import Link from 'next/link'
import { IoIosAdd } from 'react-icons/io'
import PWAInstallButton from './PWAInstallButton'

const Navigation = () => (
  <nav className="fixed w-full bottom-0 z-50 sm:relative">
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
