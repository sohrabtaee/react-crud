import React, { createContext, useReducer } from 'react'
import NotesReducer from './NotesReducer'
import {
  REMOVE_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  UPDATE_NOTES,
  LOCAL_STORAGE_KEY,
} from './Constants'

let notes = []
if (process.browser && localStorage.getItem(LOCAL_STORAGE_KEY)) {
  notes = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
}

const initialState = {
  notes,
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

  function updateNotes(notes) {
    dispatch({
      type: UPDATE_NOTES,
      payload: notes,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        notes: state.notes,
        removeNote,
        addNote,
        editNote,
        updateNotes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
