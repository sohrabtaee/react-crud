import { addMultipleNotes } from './actions/addNote'

describe('Edit Note', () => {
  it('should edit a note', () => {
    const editedNote = {
      title: 'Edited Title',
      content: 'Edited Content',
    }
    addMultipleNotes(3)

    cy.get('[data-cy="edit-note"]').eq(1).click()

    // check if note title and content are shown in edit form
    cy.get('[data-cy="note-title"]').should('have.value', 'Note Title 1')
    cy.get('[data-cy="note-content"]').should('have.value', 'Note Content 1')

    // Edit the note
    cy.get('[data-cy="note-title"]').clear()
    cy.get('[data-cy="note-title"]').type(editedNote.title)
    cy.get('[data-cy="note-content"]').clear()
    cy.get('[data-cy="note-content"]').type(editedNote.content)
    cy.get('[data-cy="note-submit"]').click()

    // check if the note is edited
    cy.get('[data-cy="note"]').should('have.length', 3)
    cy.get('[data-cy="note"]').eq(1).should('contain', editedNote.title)
    cy.get('[data-cy="note"]').eq(1).should('contain', editedNote.content)
  })
})
