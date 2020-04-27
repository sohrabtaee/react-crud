import React, { useContext } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GlobalContext } from '~/context/GlobalState'
import NoteForm from '~/components/NoteForm'

const EditNote = () => {
  const router = useRouter()
  const { id } = router.query
  const { notes } = useContext(GlobalContext)
  const note = notes.find((note) => note.id === Number(id))

  const { editNote } = useContext(GlobalContext)
  const submitNote = (note) => {
    editNote(note)
    router.push('/')
  }

  return (
    <div className="p-4">
      <Head>
        <title>Edit Note</title>
      </Head>

      <NoteForm {...note} onSubmit={submitNote} />
    </div>
  )
}

export default EditNote
