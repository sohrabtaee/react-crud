import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AddNote from '~/pages/add'
import { GlobalContext } from '~/context/GlobalState'
import { useRouter } from 'next/router'

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      push: jest.fn(),
    }),
  }
})
jest.mock('~/components/NoteForm', () => {
  const NoteForm = ({ onSubmit }) => (
    <button
      data-testid="submit-button"
      onClick={() =>
        onSubmit({
          title: 'Note Title',
          content: 'Note Content',
        })
      }
    ></button>
  )
  return NoteForm
})

describe('Add page', () => {
  it('should add a note', () => {
    const addNote = jest.fn()
    render(
      <GlobalContext.Provider
        value={{
          addNote,
        }}
      >
        <AddNote />
      </GlobalContext.Provider>
    )

    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)

    expect(addNote).toHaveBeenCalledTimes(1)
    expect(addNote).toHaveBeenCalledWith({
      title: 'Note Title',
      content: 'Note Content',
    })
    // TODO: Fix this test
    // expect(useRouter().push).toHaveBeenCalledTimes(1)
  })
})
