import NotesReducer from '~/context/NotesReducer'
import {
  REMOVE_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  UPDATE_NOTES,
} from '~/context/Constants'
import { sampleNotes } from '~/tests/helpers'

describe('Notes Reducer', () => {
  it('should ignore irrelevant actions', () => {
    const state = {
      notes: sampleNotes,
    }
    const action = {
      type: 'fakeAction',
      payload: 'fakePayload',
    }
    const result = NotesReducer(state, action)

    expect(result).toEqual(state)
  })

  it('should remove a note', () => {
    const state = {
      notes: sampleNotes,
    }
    const action = {
      type: REMOVE_NOTE,
      payload: 2,
    }
    const result = NotesReducer(state, action)

    expect(result).toEqual({
      notes: [sampleNotes[0]],
    })
  })

  it('should add a note', () => {
    const state = {
      notes: sampleNotes,
    }
    const action = {
      type: ADD_NOTE,
      payload: {
        title: 'new title',
        content: 'new content',
      },
    }
    const result = NotesReducer(state, action)

    expect(result).toEqual({
      notes: [
        ...sampleNotes,
        {
          title: 'new title',
          content: 'new content',
          id: 3,
          date: new Date(),
        },
      ],
    })
  })

  it('should edit a note', () => {
    const state = {
      notes: sampleNotes,
    }
    const action = {
      type: EDIT_NOTE,
      payload: {
        ...sampleNotes[1],
        title: 'new title',
        content: 'new content',
      },
    }
    const result = NotesReducer(state, action)

    expect(result).toEqual({
      notes: [
        sampleNotes[0],
        {
          ...sampleNotes[1],
          title: 'new title',
          content: 'new content',
        },
      ],
    })
  })

  it('should update notes', () => {
    const state = {
      notes: sampleNotes,
    }
    const action = {
      type: UPDATE_NOTES,
      payload: [],
    }
    const result = NotesReducer(state, action)

    expect(result).toEqual({ notes: [] })
  })
})
