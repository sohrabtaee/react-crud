export default (state, action) => {
  switch (action.type) {
    case 'REMOVE_NOTE':
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      }
    case 'ADD_NOTES':
      return {
        ...state,
        notes: [...state.notes, action.payload],
      }
    case 'EDIT_NOTE':
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.payload.id) {
            return action.payload
          }
          return note
        }),
      }
    default:
      return state
  }
}
