export const generateId = (notes) => {
  if (notes.length) {
    return notes[notes.length - 1].id + 1
  }
  return 1
}
