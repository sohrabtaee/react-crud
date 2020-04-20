import React from 'react'
import Link from 'next/link'

const AddNoteButton = () => (
  <Link href="/add">
    <a
      className="button border-0 bg-green-600 text-white text-xl"
      data-testid="button"
      data-cy="add-note"
    >
      Add a note
    </a>
  </Link>
)

export default AddNoteButton
