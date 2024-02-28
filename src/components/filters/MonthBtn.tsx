type MonthBtnProps = {
  subtract: number,
  setMonth: (subtract: number) => void
}

const btnStyle: React.CSSProperties = {
  padding: 'var(--gap) var(--gap-s)',
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap)',
  color: 'var(--color-2)',
  fontWeight: '600',
  textTransform: 'capitalize'
}

function getMonthName(subtract: number) {
  const date = new Date()
  date.setMonth(date.getMonth() - subtract)
  return date.toLocaleString('default', { month: 'long' });
}

export default function MonthBtn({ subtract, setMonth }: MonthBtnProps) {
  return (
    <button onClick={() => setMonth(subtract)} style={btnStyle}>{getMonthName(subtract)}</button>
  )
}