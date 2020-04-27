export const useDateFormatter = (note, options = {}) => {
  if (!note || !note.date) {
    return
  }
  return new Intl.DateTimeFormat().format(new Date(note.date), options)
}
