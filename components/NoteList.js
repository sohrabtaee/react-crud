import React, { useContext } from 'react'
import Link from 'next/link'
import { GlobalContext } from '../context/GlobalState'
import { MdClose, MdEdit } from 'react-icons/md'

const NoteList = () => {
  const { notes } = useContext(GlobalContext)

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} className="mt-4 bg-gray-100 p-2 relative">
          <h3 className="pr-16">{note.title}</h3>
          <div className="mt-1">{note.content}</div>
          <div className="absolute top-0 right-0 text-xl">
            <Link href="/edit/[id]" as={`/edit/${note.id}`}>
              <a className="action-button text-blue-600">
                <MdEdit />
              </a>
            </Link>
            <button className="action-button text-red-600">
              <MdClose />
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default NoteList
