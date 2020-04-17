import React from 'react'
import Link from 'next/link'
import { IoIosAdd } from 'react-icons/io'

const Navigation = () => (
  <nav className="fixed w-full bottom-0 z-10 sm:relative">
    <ul className="flex justify-between items-center bg-gray-200 px-4 py-2 text-lg uppercase">
      <li>
        <Link href="/">
          <a className="block">My Notes</a>
        </Link>
      </li>
      <li>
        <Link href="/add">
          <a className="block text-5xl text-green-600" title="Add Note">
            <IoIosAdd />
          </a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
