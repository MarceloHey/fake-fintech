import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { ISale, useSalesContext } from "../context/salesContext"

type SaleDay = {
  data: string,
  pago: number,
  processando: number,
  falha: number
}

function formatChartData(data: ISale[]): SaleDay[] {
  const formattedData = data.reduce((acc: { [key: string]: SaleDay }, curr) => {
    const day = curr.data.split(' ')[0]
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0
      }
    }
    acc[day][curr.status] += curr.preco
    return acc
  }, {})

  return Object.values(formattedData).map(day => ({ ...day, data: day.data.substring(5) }))
}

export default function SalesChart() {
  const { data } = useSalesContext()
  if (data === null) return null

  const formattedData = formatChartData(data)
  return (
    <div>
      <ResponsiveContainer width={"99%"} height={400}>
        <LineChart data={formattedData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend ></Legend>
          <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
          <Line type="monotone" dataKey="processando" stroke="#FBCB21" strokeWidth={3} />
          <Line type="monotone" dataKey="falha" stroke="red" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}