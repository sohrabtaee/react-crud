import { REMOVE_NOTE, ADD_NOTE, EDIT_NOTE, UPDATE_NOTES } from './Constants'
import { generateId } from './Helpers'

export default (state, action) => {
  switch (action.type) {
    case REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      }
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            ...action.payload,
            id: generateId(state.notes),
            date: new Date(),
          },
        ],
      }
    case EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            return action.payload
          }
          return note
        }),
      }
    case UPDATE_NOTES:
      return {
        ...state,
        notes: action.payload,
      }
    default:
      return state
  }
}
