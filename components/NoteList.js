import React, { useContext } from 'react'
import Link from 'next/link'
import { GlobalContext } from '../context/GlobalState'
import { MdClose, MdEdit } from 'react-icons/md'

const NoteList = ({ onDelete }) => {
  const { notes } = useContext(GlobalContext)

  return (
    <ul className="flex flex-wrap">
      {notes.map((note) => (
        <li key={note.id} className="note-card sm:w-64 sm:mr-4">
          <header className="note-card-header">
            <h2 className="pr-16 text-lg">{note.title}</h2>
            <div className="absolute top-0 right-0 text-xl">
              <Link href="/edit/[id]" as={`/edit/${note.id}`}>
                <a className="action-button text-blue-600">
                  <MdEdit />
                </a>
              </Link>
              <button
                className="action-button text-red-600"
                onClick={() => onDelete(note.id)}
              >
                <MdClose />
              </button>
            </div>
          </header>
          {note.content && (
            <div className="note-card-content">{note.content}</div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default NoteList
