import addNote from './actions/addNote'

describe('Delete Note', () => {
  it('should delete a note', () => {
    const note = {
      title: 'Note Title',
      content: 'Note Content',
    }
    addNote(note)

    cy.get('[data-cy="delete-note"]').click()

    // check if the note is deleted
    cy.get('[data-cy="add-note"]').should('exist')
    cy.get('[data-cy="note"]').should('not.exist')
  })
})
