import { addANote } from './actions/addNote'

describe('View Note', () => {
  it('should view a note', () => {
    const note = {
      title: 'Note Title',
      content: 'Note Content',
    }
    addANote(note)

    cy.get('[data-cy="view-note"]').click()

    // check if the note is viewed
    cy.get('[data-cy="view-note-title"]').should('contain', note.title)
    cy.get('[data-cy="view-note-content"]').should('contain', note.content)
  })
})
