import React, { useContext } from 'react'
import Head from 'next/head'
import { GlobalContext } from '../context/GlobalState'
import NoteList from '../components/NoteList'

const Home = () => {
  const { removeNote } = useContext(GlobalContext)
  const deleteNote = (id) => {
    removeNote(id)
  }

  return (
    <div className="p-4">
      <Head>
        <title>My Notes</title>
      </Head>

      <h1>My Notes</h1>
      <NoteList onDelete={deleteNote} />
    </div>
  )
}

export default Home
