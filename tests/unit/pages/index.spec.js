import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from '~/pages/index'
import { sampleNotes } from '~/tests/helpers'
import { GlobalContext } from '~/context/GlobalState'

describe('Home page', () => {
  describe('No notes', () => {
    it('should show the Add button when there are no notes', () => {
      render(
        <GlobalContext.Provider
          value={{
            notes: [],
          }}
        >
          <Home />
        </GlobalContext.Provider>
      )
      const addNote = screen.getByTestId('add-note')
      const noteList = screen.queryByTestId('notes')

      expect(addNote).toBeTruthy()
      expect(noteList).toBeFalsy()
    })
  })

  describe('With notes', () => {
    it('should show a list of of notes when there are notes', async () => {
      const localStorageSpy = jest.spyOn(Storage.prototype, 'setItem')
      const removeNote = jest.fn()
      render(
        <GlobalContext.Provider
          value={{
            notes: sampleNotes,
            removeNote,
          }}
        >
          <Home />
        </GlobalContext.Provider>
      )

      const addNote = screen.queryByTestId('add-note')
      const noteList = screen.queryByTestId('notes')
      const deleteButton = screen.getAllByTestId('delete-button')[0]
      fireEvent.click(deleteButton)

      expect(addNote).toBeFalsy()
      expect(noteList).toBeTruthy()
      expect(localStorageSpy).toHaveBeenCalledTimes(1)
      expect(removeNote).toHaveBeenCalledTimes(1)
      expect(removeNote).toHaveBeenCalledWith(sampleNotes[0].id)
    })
  })
})
