export const addANote = (note) => {
  // go to add note page
  cy.visit('/').get('[data-cy="nav-add-note"]').click()

  // add a note
  cy.get('[data-cy="note-title"]').type(note.title)
  cy.get('[data-cy="note-content"]').type(note.content)
  cy.get('[data-cy="note-submit"]').click()
}

export const addMultipleNotes = (number) => {
  for (let i = 0; i < number; i++) {
    addANote({
      title: `Note Title ${i}`,
      content: `Note Content ${i}`,
    })
  }
}
