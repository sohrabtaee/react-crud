import addNote from './actions/addNote'

describe('Edit Note', () => {
  it('should edit a note', () => {
    const note = {
      title: 'Note Title',
      content: 'Note Content',
    }
    const editedNote = {
      title: 'Edited Title',
      content: 'Edited Content',
    }
    addNote(note)

    cy.get('[data-cy="edit-note"]').click()

    // check if note title and content are shown in edit form
    cy.get('[data-cy="note-title"]').should('have.value', note.title)
    cy.get('[data-cy="note-content"]').should('have.value', note.content)

    // Edit the note
    cy.get('[data-cy="note-title"]').clear()
    cy.get('[data-cy="note-title"]').type(editedNote.title)
    cy.get('[data-cy="note-content"]').clear()
    cy.get('[data-cy="note-content"]').type(editedNote.content)
    cy.get('[data-cy="note-submit"]').click()

    // check if the note is edited
    cy.get('[data-cy="note"]').should('contain', editedNote.title)
    cy.get('[data-cy="note"]').should('contain', editedNote.content)
  })
})
