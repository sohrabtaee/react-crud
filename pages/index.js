import React from 'react'
import Head from 'next/head'
import NoteList from '../components/NoteList'

const Home = () => (
  <div className="p-4">
    <Head>
      <title>My Notes</title>
    </Head>

    <h1>My Notes</h1>
    <NoteList />
  </div>
)

export default Home
