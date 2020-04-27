export const useDateFormatter = (note, options = {}) => {
  if (!note) {
    return
  }
  return new Intl.DateTimeFormat().format(new Date(note.date), options)
}
