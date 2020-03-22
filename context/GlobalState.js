import React, { createContext, useReducer } from 'react'
import NotesReducer from './NotesReducer'

const initialState = {
  notes: [
    {
      id: 1,
      title: 'Sample note',
      content: 'Sample note content',
    },
  ],
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NotesReducer, initialState)

  function removeNote(id) {
    dispatch({
      type: 'REMOVE_NOTE',
      payload: id,
    })
  }

  function addNote(note) {
    dispatch({
      type: 'ADD_NOTE',
      payload: note,
    })
  }

  function editNote(note) {
    dispatch({
      type: 'EDIT_NOTE',
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
