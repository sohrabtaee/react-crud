import React, { useContext } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GlobalContext } from '../context/GlobalState'
import NoteList from '../components/NoteList'

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
        <Link href="/add">
          <a className="button mt-4 border-0 bg-green-600 text-white text-xl">
            Add a note
          </a>
        </Link>
      )}
    </div>
  )
}

export default Home
