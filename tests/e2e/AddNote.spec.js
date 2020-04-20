import { addMultipleNotes } from './actions/addNote'

describe('Add Note', () => {
  it('should create a note', () => {
    addMultipleNotes(3)

    // check if the note is added
    cy.get('[data-cy="note"]').should('have.length', 3)
    cy.get('[data-cy="note"]').each(($el, i) => {
      cy.wrap($el).should('contain', `Note Title ${i}`)
      cy.wrap($el).should('contain', `Note Content ${i}`)
    })

    // check if the note is shown when re-visiting the page
    cy.visit('/')
    cy.get('[data-cy="note"]').should('have.length', 3)
    cy.get('[data-cy="add-note"]').should('not.exist')
    cy.get('[data-cy="note"]').each(($el, i) => {
      cy.wrap($el).should('contain', `Note Title ${i}`)
      cy.wrap($el).should('contain', `Note Content ${i}`)
    })
  })
})
