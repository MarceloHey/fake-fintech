export function formatDate(date: string) {
  const dateToFormat = new Date(date)
  return `${dateToFormat.getFullYear()}-${String(dateToFormat.getMonth() + 1).padStart(2, '0')}-${String(dateToFormat.getDate()).padStart(2, '0')}`
}