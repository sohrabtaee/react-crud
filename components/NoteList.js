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
          <aside className="float-right pl-2">
            <Link href="/edit/[id]" as={`/edit/${note.id}`}>
              <a
                className="action-button text-blue-600"
                data-testid="edit-link"
                data-cy="edit-note"
              >
                <MdEdit />
              </a>
            </Link>
            <button
              className="action-button text-red-600"
              onClick={() => onDelete(note.id)}
              data-testid="delete-button"
              data-cy="delete-note"
            >
              <MdClose />
            </button>
          </aside>
          <article className="h-full">
            <Link href="/view/[id]" as={`/view/${note.id}`}>
              <a
                className="block h-full"
                data-testid="view-link"
                data-cy="view-note"
              >
                {note.title && (
                  <h2 className="text-lg mb-1 truncate">{note.title}</h2>
                )}
                <p className="note-card-content">{note.content}</p>
              </a>
            </Link>
          </article>
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
