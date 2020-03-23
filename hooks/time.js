export const useformatDate = (time) => {
  return new Intl.DateTimeFormat('en-US').format(new Date(time))
}
