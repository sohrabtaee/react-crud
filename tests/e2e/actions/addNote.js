export default function (note) {
  // go to add note page
  cy.visit('/').get('[data-cy="add-note"]').click()

  // add a note
  cy.get('[data-cy="note-title"]').type(note.title)
  cy.get('[data-cy="note-content"]').type(note.content)
  cy.get('[data-cy="note-submit"]').click()
}
