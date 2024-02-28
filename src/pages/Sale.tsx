import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { ISale } from "../context/salesContext"
import Loading from "../components/Loading"

type NoDateSale = Omit<ISale, 'data'>

export default function Sale() {
  const { id } = useParams()
  const { data, loading } = useFetch<NoDateSale>(`https://data.origamid.dev/vendas/${id}`)

  if (loading) return (
    <div>
      <Loading />
    </div>
  )
  if (data === null) return null
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">NOME: {data.nome}</div>
      <div className="box mb">PREÇO: {data.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
      <div className="box mb">STATUS: {data.status}</div>
      <div className="box mb">PAGAMENTO: {data.pagamento}</div>
    </div>
  )
}