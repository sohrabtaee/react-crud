import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NoteForm from '~/components/NoteForm'

describe('Note Form', () => {
  describe('Add Note', () => {
    const note = {
      title: 'Note Title',
      content: 'Note Content',
    }
    const onSubmit = jest.fn()
    let noteTitle, noteContent, noteSubmit
    beforeEach(() => {
      render(<NoteForm onSubmit={onSubmit} />)
      noteTitle = screen.getByTestId('note-title')
      noteContent = screen.getByTestId('note-content')
      noteSubmit = screen.getByTestId('note-submit')
    })

    it('should show an empty form', () => {
      expect(noteTitle).toBeTruthy()
      expect(noteContent).toBeTruthy()
      expect(noteSubmit).toBeTruthy()
    })

    it('should not submit a form without a title', async () => {
      await act(async () => {
        fireEvent.input(noteContent, { target: { value: note.content } })
        fireEvent.click(noteSubmit)
      })
      expect(onSubmit).toHaveBeenCalledTimes(0)
    })

    it('should add a note', async () => {
      await act(async () => {
        fireEvent.input(noteTitle, { target: { value: note.title } })
        fireEvent.input(noteContent, { target: { value: note.content } })
        fireEvent.click(noteSubmit)
      })
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
    const onSubmit = jest.fn()
    let noteTitle, noteContent, noteSubmit
    beforeEach(() => {
      render(<NoteForm {...note} onSubmit={onSubmit} />)
      noteTitle = screen.getByTestId('note-title')
      noteContent = screen.getByTestId('note-content')
      noteSubmit = screen.getByTestId('note-submit')
    })

    it('should show the form populated with given values', () => {
      expect(noteTitle).toHaveValue(note.title)
      expect(noteContent).toHaveValue(note.content)
    })

    it('should edit a note', async () => {
      await act(async () => {
        fireEvent.input(noteTitle, { target: { value: editedNote.title } })
        fireEvent.input(noteContent, { target: { value: editedNote.content } })
        fireEvent.click(noteSubmit)
      })
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
