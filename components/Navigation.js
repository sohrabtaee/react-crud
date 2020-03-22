import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
].map((link) => ({
  ...link,
  key: `nav-link-${link.href}-${link.label}`,
}))

const Navigation = () => (
  <nav>
    <ul className="flex bg-gray-200 p-4">
      {links.map(({ key, href, label }) => (
        <li key={key} className="mr-4">
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default Navigation
