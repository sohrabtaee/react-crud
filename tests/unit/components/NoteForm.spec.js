import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NoteForm from '~/components/NoteForm'

const onSubmit = jest.fn()
let noteTitle, noteContent, noteSubmit
const setup = (note) => {
  note
    ? render(<NoteForm {...note} onSubmit={onSubmit} />)
    : render(<NoteForm onSubmit={onSubmit} />)

  noteTitle = screen.getByTestId('note-title')
  noteContent = screen.getByTestId('note-content')
  noteSubmit = screen.getByTestId('note-submit')
}

const fillAndSubmitTheForm = async (title, content) => {
  await act(async () => {
    title && fireEvent.input(noteTitle, { target: { value: title } })
    content && fireEvent.input(noteContent, { target: { value: content } })
    fireEvent.click(noteSubmit)
  })
}

describe('Note Form', () => {
  afterEach(() => jest.clearAllMocks())

  describe('Add Note', () => {
    const note = {
      title: 'Note Title',
      content: 'Note Content',
    }
    beforeEach(() => setup())

    it('should show an empty form', () => {
      expect(noteTitle).toBeTruthy()
      expect(noteContent).toBeTruthy()
      expect(noteSubmit).toBeTruthy()
    })

    it('should not submit a form without a title', async () => {
      await fillAndSubmitTheForm(null, note.content)

      expect(onSubmit).toHaveBeenCalledTimes(0)
    })

    it('should add a note', async () => {
      await fillAndSubmitTheForm(note.title, note.content)

      expect(noteTitle).toHaveValue('Note Title')
      expect(noteContent).toHaveValue('Note Content')
      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onSubmit).toHaveBeenCalledWith(note, undefined)
    })
  })

  describe('Edit Note', () => {
    const note = {
      id: 1,
      title: 'Note Title',
      content: 'Note Content',
    }
    const editedNote = {
      id: 1,
      title: 'Edited Title',
      content: 'Edited Content',
    }
    beforeEach(() => setup(note))

    it('should show the form populated with given values', () => {
      expect(noteTitle).toHaveValue(note.title)
      expect(noteContent).toHaveValue(note.content)
    })

    it('should edit a note', async () => {
      await fillAndSubmitTheForm(editedNote.title, editedNote.content)

      expect(noteTitle).toHaveValue(editedNote.title)
      expect(noteContent).toHaveValue(editedNote.content)
      expect(onSubmit).toHaveBeenCalledTimes(1)
      expect(onSubmit).toHaveBeenCalledWith(
        {
          title: editedNote.title,
          content: editedNote.content,
        },
        editedNote.id
      )
    })
  })
})
