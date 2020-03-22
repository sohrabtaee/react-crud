import React from 'react'
import Head from 'next/head'
import NoteList from '../components/NoteList'

const Home = () => (
  <div className="p-4">
    <Head>
      <title>Home</title>
    </Head>

    <h1>Home Page</h1>
    <NoteList />
  </div>
)

export default Home
