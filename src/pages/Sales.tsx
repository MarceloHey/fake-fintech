import SaleItem from "../components/SaleItem"
import { useSalesContext } from "../context/salesContext"

export default function Sales() {
  const { data } = useSalesContext()
  if (data === null) return null

  return (
    <ul className="sales">
      {data.map(sale => {
        return <li key={sale.id}><SaleItem sale={sale} /></li>
      })}
    </ul>
  )
}