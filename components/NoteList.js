import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { MdClose, MdEdit } from 'react-icons/md'

const NoteList = ({ notes, onDelete }) => {
  return (
    <ul className="flex flex-wrap" data-testid="notes" data-cy="notes">
      {notes.map((note) => (
        <li
          key={note.id}
          className="note-card"
          data-testid="note"
          data-cy="note"
        >
          <header className="note-card-header">
            <h2 className="text-lg w-full">
              <Link href="/view/[id]" as={`/view/${note.id}`}>
                <a className="block truncate" data-testid="view-link">
                  {note.title}
                </a>
              </Link>
            </h2>
            <div className="absolute top-0 right-0 z-10">
              <Link href="/edit/[id]" as={`/edit/${note.id}`}>
                <a
                  className="action-button text-blue-600"
                  data-testid="edit-link"
                >
                  <MdEdit />
                </a>
              </Link>
              <button
                className="action-button text-red-600 ml-1"
                onClick={() => onDelete(note.id)}
                data-testid="delete-button"
              >
                <MdClose />
              </button>
            </div>
          </header>
          <Link href="/view/[id]" as={`/view/${note.id}`}>
            <a className="note-card-content">{note.content}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

NoteList.propTypes = {
  notes: PropTypes.array,
  onDelete: PropTypes.func,
}

export default NoteList
