import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { GlobalContext } from '~/context/GlobalState'
import NoteForm from '~/components/NoteForm'

const AddNote = () => {
  const router = useRouter()
  const { addNote } = useContext(GlobalContext)
  const submitNote = (note) => {
    addNote(note)
    router.push('/')
  }

  return (
    <div className="p-4">
      <Head>
        <title>Add Note</title>
      </Head>

      <NoteForm onSubmit={submitNote} />
    </div>
  )
}

export default AddNote
