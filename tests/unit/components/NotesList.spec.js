import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import NoteList from '~/components/NoteList'
import { sampleNotes } from '~/tests/helpers'

describe('Notes List', () => {
  describe('No notes', () => {
    it('should show nothing', () => {
      render(<NoteList notes={[]} />)
      const notes = screen.getByTestId('notes')

      expect(notes.childNodes.length).toEqual(0)
    })
  })

  describe('With notes', () => {
    const onDelete = jest.fn()
    const notes = sampleNotes
    beforeEach(() => {
      render(<NoteList notes={notes} onDelete={onDelete} />)
    })

    it('should show a list of notes', () => {
      const notes = screen.getByTestId('notes')

      expect(notes.childNodes.length).toEqual(2)
    })

    it('should show a proper title for each note', () => {
      const noteList = screen.getAllByTestId('note')

      expect(noteList[0]).toHaveTextContent('title')
      expect(noteList[1]).toHaveTextContent('title2')
    })

    it('should show a delete button for each note', () => {
      const deleteButtonList = screen.getAllByTestId('delete-button')

      expect(deleteButtonList.length).toEqual(2)
    })

    it('should emit a delete event with note id when user click on delete button', () => {
      const deleteButton = screen.getAllByTestId('delete-button')[0]
      fireEvent.click(deleteButton)

      expect(onDelete).toHaveBeenCalledTimes(1)
      expect(onDelete).toHaveBeenCalledWith(notes[0].id)
    })

    it('should go to view page when user clicks on a note', () => {
      const viewLink = screen.getAllByTestId('view-link')[0]

      expect(viewLink.getAttribute('href')).toEqual(`/view/${notes[0].id}`)
    })

    it('should go to edit page when user clicks on the edit button', () => {
      const editLink = screen.getAllByTestId('edit-link')[0]

      expect(editLink.getAttribute('href')).toEqual(`/edit/${notes[0].id}`)
    })
  })
})
