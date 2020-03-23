import React, { createContext, useReducer } from 'react'
import NotesReducer from './NotesReducer'
import { REMOVE_NOTE, ADD_NOTE, EDIT_NOTE } from './Constants'

const initialState = {
  notes: [
    {
      id: 1,
      title: 'Title',
      content:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod commodi perspiciatis nemo quia. Enim labore blanditiis unde qui necessitatibus repellat asperiores explicabo impedit non fugit! Quidem adipisci explicabo autem maiores!',
    },
    {
      id: 2,
      title: 'Very very very long title for testing',
      content: 'Some content',
    },
    {
      id: 3,
      title: 'Normal Title',
      content: '',
    },
  ],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotesReducer, initialState)

  function removeNote(id) {
    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    })
  }

  function addNote(note) {
    dispatch({
      type: ADD_NOTE,
      payload: note,
    })
  }

  function editNote(note) {
    dispatch({
      type: EDIT_NOTE,
      payload: note,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        notes: state.notes,
        removeNote,
        addNote,
        editNote,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
