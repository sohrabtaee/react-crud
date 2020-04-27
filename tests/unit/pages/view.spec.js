import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ViewPage from '~/pages/view/[id]'
import { sampleNotes } from '~/tests/helpers'
import { GlobalContext } from '~/context/GlobalState'

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      push: jest.fn(),
      query: {
        id: '2',
      },
    }),
  }
})

describe('View page', () => {
  describe('Note not found', () => {
    it('should show a note not found message', () => {
      render(
        <GlobalContext.Provider
          value={{
            notes: [],
          }}
        >
          <ViewPage />
        </GlobalContext.Provider>
      )
      const notFound = screen.getByTestId('not-found')
      const noteTitle = screen.queryByTestId('note-title')

      expect(notFound).toBeTruthy()
      expect(noteTitle).toBeFalsy()
    })
  })

  describe('Note found', () => {
    it('should show the note', () => {
      render(
        <GlobalContext.Provider
          value={{
            notes: sampleNotes,
          }}
        >
          <ViewPage />
        </GlobalContext.Provider>
      )
      const notFound = screen.queryByTestId('not-found')
      const noteTitle = screen.getByTestId('note-title')
      const noteContent = screen.getByTestId('note-content')
      const noteDate = screen.getByTestId('note-date')

      expect(notFound).toBeFalsy()
      expect(noteTitle).toHaveTextContent('title2')
      expect(noteContent).toHaveTextContent('content2')
      expect(noteDate).toHaveTextContent('21/02/2020')
    })
  })
})
