import { addMultipleNotes } from './actions/addNote'

describe('Delete Note', () => {
  it('should delete a note', () => {
    addMultipleNotes(3)

    cy.get('[data-cy="delete-note"]').eq(1).click()

    // check if the note is deleted
    cy.get('[data-cy="note"]').should('have.length', 2)
    cy.get('[data-cy="note"]').should('contain', 'Note Title 0')
    cy.get('[data-cy="note"]').should('not.contain', 'Note Title 1')
    cy.get('[data-cy="note"]').should('contain', 'Note Title 2')
  })
})
