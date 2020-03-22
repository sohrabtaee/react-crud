import React, { useContext } from 'react'
import Head from 'next/head'
import { GlobalContext } from '../context/GlobalState'
import NoteList from '../components/NoteList'
import AddNoteButton from '../components/AddNoteButton'

const Home = () => {
  const { notes, removeNote } = useContext(GlobalContext)
  const deleteNote = (id) => {
    removeNote(id)
  }

  return (
    <div className="p-4">
      <Head>
        <title>My Notes</title>
      </Head>

      {notes.length ? (
        <NoteList notes={notes} onDelete={deleteNote} />
      ) : (
        <AddNoteButton />
      )}
    </div>
  )
}

export default Home
