import SalesChart from "../components/SaleChart"
import { useSalesContext } from "../context/salesContext"

export default function Summary() {
  const { data } = useSalesContext()
  if (data === null) return null
  return (
    <>
      <section>
        <div className="summary flex mb">
          <div className="box">
            <h2>Vendas</h2>
            <span>
              {data.reduce((acc, curr) => acc += curr.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
          </div>
          <div className="box">
            <h2>Recebido</h2>
            <span>
              {data.filter(sale => sale.status === 'pago')
                .reduce((acc, curr) => acc += curr.preco, 0)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              }
            </span>
          </div>
          <div className="box">
            <h2>Processando</h2>
            <span>
              {data.filter(sale => sale.status === 'processando')
                .reduce((acc, curr) => acc += curr.preco, 0)
                .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              }
            </span>
          </div>
        </div>
        <div className="box mb">
          <SalesChart />
        </div>
      </section>
    </>
  )
}