import addNote from './actions/addNote'

describe('Add Note', () => {
  it('should create a note', () => {
    const note = {
      title: 'Note Title',
      content: 'Note Content',
    }
    addNote(note)

    // check if the note is added
    cy.get('[data-cy="note"]').should('contain', note.title)
    cy.get('[data-cy="note"]').should('contain', note.content)

    // check if the note is shown when re-visiting the page
    cy.visit('/')
    cy.get('[data-cy="add-note"]').should('not.exist')
    cy.get('[data-cy="note"]').should('contain', note.title)
    cy.get('[data-cy="note"]').should('contain', note.content)
  })
})
