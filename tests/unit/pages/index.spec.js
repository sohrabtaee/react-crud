import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import HomePage from '~/pages/index'
import { sampleNotes } from '~/tests/helpers'
import { GlobalContext } from '~/context/GlobalState'

jest.mock('~/components/NoteList', () => {
  const NoteList = ({ onDelete }) => (
    <button data-testid="notes-button" onClick={() => onDelete('id')}></button>
  )
  return NoteList
})

describe('Home page', () => {
  describe('No notes', () => {
    it('should show the Add button when there are no notes', () => {
      render(
        <GlobalContext.Provider
          value={{
            notes: [],
          }}
        >
          <HomePage />
        </GlobalContext.Provider>
      )
      const addNote = screen.getByTestId('add-note')
      const notesButton = screen.queryByTestId('notes-button')

      expect(addNote).toBeTruthy()
      expect(notesButton).toBeFalsy()
    })
  })

  describe('With notes', () => {
    it('should show a list of of notes when there are notes', async () => {
      const setItemSpy = jest.spyOn(Storage.prototype, 'setItem')
      const removeNote = jest.fn()
      render(
        <GlobalContext.Provider
          value={{
            notes: sampleNotes,
            removeNote,
          }}
        >
          <HomePage />
        </GlobalContext.Provider>
      )

      const addNote = screen.queryByTestId('add-note')
      const notesButton = screen.getByTestId('notes-button')
      fireEvent.click(notesButton)

      expect(addNote).toBeFalsy()
      expect(setItemSpy).toHaveBeenCalledTimes(1)
      expect(removeNote).toHaveBeenCalledTimes(1)
      expect(removeNote).toHaveBeenCalledWith('id')
    })
  })
})
