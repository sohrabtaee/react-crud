describe('Create Note', () => {
  it('should create a note', () => {
    const note = {
      title: 'Note Title',
      content: 'Note Content',
    }
    cy.visit('/').get('[data-cy="add-note"]').click()

    cy.get('[data-cy="note-title"]').type(note.title)
    cy.get('[data-cy="note-content"]').type(note.content)

    cy.get('[data-cy="note-submit"]').click()

    cy.get('[data-cy="note"]').should('contain', note.title)
    cy.get('[data-cy="note"]').should('contain', note.content)
  })
})
