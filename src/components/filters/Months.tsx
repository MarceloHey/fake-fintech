import { useSalesContext } from "../../context/salesContext";
import { formatDate } from "../../utils/date";
import MonthBtn from "./MonthBtn";

export default function Months() {
  const { setInitialDate, setFinalDate } = useSalesContext()

  function handleMonthClick(subtract: number) {
    const date = new Date()
    date.setMonth(date.getMonth() - subtract)

    const firstDay = formatDate(new Date(date.getFullYear(), date.getMonth(), 1).toISOString())
    const lastDay = formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0).toISOString())
    setInitialDate(firstDay)
    setFinalDate(lastDay)
  }

  return (
    <div className="flex">
      <MonthBtn setMonth={(s) => handleMonthClick(s)} subtract={3} />
      <MonthBtn setMonth={(s) => handleMonthClick(s)} subtract={2} />
      <MonthBtn setMonth={(s) => handleMonthClick(s)} subtract={1} />
      <MonthBtn setMonth={(s) => handleMonthClick(s)} subtract={0} />
    </div>
  )
}