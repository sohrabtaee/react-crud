export const useDateFormatter = (date, options = {}) => {
  return new Intl.DateTimeFormat().format(new Date(date), options)
}
