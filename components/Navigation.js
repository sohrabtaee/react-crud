import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { IoIosAdd } from 'react-icons/io'
import { LOCAL_STORAGE_KEYS } from '~/context/Constants'
import PWAInstallButton from './PWAInstallButton'

const Navigation = () => {
  const [isInstalled, setIsInstalled] = useState(false)
  useEffect(() => {
    if (
      process.browser &&
      localStorage.getItem(LOCAL_STORAGE_KEYS.PWA_INSTALLED)
    ) {
      setIsInstalled(true)
    }
  }, [isInstalled])

  return (
    <nav className="fixed w-full bottom-0 z-50 sm:relative">
      <ul className="flex justify-start items-center bg-gray-200 px-4 py-2 text-lg uppercase">
        <li>
          <Link href="/">
            <a className="block">My Notes</a>
          </Link>
        </li>
        {!isInstalled && (
          <li>
            <PWAInstallButton />
          </li>
        )}

        <li className="ml-auto">
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
