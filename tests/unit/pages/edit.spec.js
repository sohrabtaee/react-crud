import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import EditPage from '~/pages/edit/[id]'
import { GlobalContext } from '~/context/GlobalState'
import { sampleNotes } from '~/tests/helpers'
import { useRouter } from 'next/router'

jest.mock('next/router', () => {
  return {
    useRouter: () => ({
      push: jest.fn(),
      query: {
        id: 2,
      },
    }),
  }
})
jest.mock('~/components/NoteForm', () => {
  const NoteForm = ({ title, content, onSubmit }) => (
    <button
      data-testid="submit-button"
      onClick={() =>
        onSubmit({
          title,
          content,
        })
      }
    ></button>
  )
  return NoteForm
})

describe('Edit page', () => {
  it('should edit a note', () => {
    const editNote = jest.fn()
    render(
      <GlobalContext.Provider
        value={{
          notes: sampleNotes,
          editNote,
        }}
      >
        <EditPage />
      </GlobalContext.Provider>
    )

    const submitButton = screen.getByTestId('submit-button')
    fireEvent.click(submitButton)

    expect(editNote).toHaveBeenCalledTimes(1)
    expect(editNote).toHaveBeenCalledWith(sampleNotes[1])
    // TODO: Fix this test
    // expect(useRouter().push).toHaveBeenCalledTimes(1)
  })
})
