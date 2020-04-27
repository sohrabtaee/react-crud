import React, { useContext, Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GlobalContext } from '~/context/GlobalState'
import AddNoteButton from '~/components/AddNoteButton'
import { useDateFormatter } from '~/hooks/useDateFormatter'

const ViewNote = () => {
  const router = useRouter()
  const { id } = router.query
  const { notes } = useContext(GlobalContext)
  const note = notes.find((note) => note.id === Number(id))
  const noteDate = useDateFormatter(note)

  return (
    <div className="p-4">
      <Head>
        <title>View Note</title>
      </Head>

      {note ? (
        <Fragment>
          <h1
            className="mb-2"
            data-cy="view-note-title"
            data-testid="note-title"
          >
            {note.title}
          </h1>
          <span
            className="text-sm text-gray-600"
            data-cy="view-note-date"
            data-testid="note-date"
          >
            {noteDate}
          </span>
          <article
            className="whitespace-pre-wrap"
            data-cy="view-note-content"
            data-testid="note-content"
          >
            {note.content}
          </article>
        </Fragment>
      ) : (
        <Fragment>
          <p className="text-xl mb-4" data-testid="not-found">
            Note not found!
          </p>
          <AddNoteButton />
        </Fragment>
      )}
    </div>
  )
}

export default ViewNote
