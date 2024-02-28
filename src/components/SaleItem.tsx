import { NavLink } from "react-router-dom";
import { ISale } from "../context/salesContext";

export default function SaleItem({ sale }: { sale: ISale }) {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${sale.id}`}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>{sale.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
    </div>
  )
}