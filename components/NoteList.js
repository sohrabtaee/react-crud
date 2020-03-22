import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const NoteList = () => {
  const { notes } = useContext(GlobalContext)

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <h3>{note.title}</h3>
          <div>{note.content}</div>
        </li>
      ))}
    </ul>
  )
}

export default NoteList
