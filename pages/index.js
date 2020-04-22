import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import { GlobalContext } from '~/context/GlobalState'
import NoteList from '~/components/NoteList'
import AddNoteButton from '~/components/AddNoteButton'
import { LOCAL_STORAGE_KEYS } from '~/context/Constants'

const Home = () => {
  const { notes, removeNote } = useContext(GlobalContext)
  const deleteNote = (id) => {
    removeNote(id)
  }

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEYS.NOTES, JSON.stringify(notes))
  }, [notes])

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
