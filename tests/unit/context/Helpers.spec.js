import { generateId } from '~/context/Helpers'
import { sampleNotes } from '~/tests/helpers'

describe('Id Generator', () => {
  it('should assign 1 as id when there are no notes', () => {
    const notes = []
    const result = generateId(notes)

    expect(result).toEqual(1)
  })

  it('should generate an id for a new note', () => {
    const result = generateId(sampleNotes)

    expect(result).toEqual(3)
  })
})
