import React from "react";
import useFetch from "../hooks/useFetch";
import { formatDate } from "../utils/date";

export interface ISale {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | "processando" | "falha";
  pagamento: 'boleto' | 'pix' | 'cartao';
  parcelas: number | null;
  data: string
}

interface ISalesContext {
  data: ISale[] | null,
  loading: boolean;
  error: string | null;
  initialDate: string;
  setInitialDate: React.Dispatch<React.SetStateAction<string>>
  finalDate: string;
  setFinalDate: React.Dispatch<React.SetStateAction<string>>
}

const SalesContext = React.createContext<ISalesContext | null>(null)
export const useSalesContext = () => {
  const salesCtx = React.useContext(SalesContext)
  if (!salesCtx) throw new Error('Error on getting sales context')
  return salesCtx
}

function setDefaultDates() {
  const initial = new Date()
  initial.setDate(initial.getDate() - 30)

  const initialDecreased = formatDate(initial.toISOString())
  const final = formatDate(new Date().toISOString())

  return [initialDecreased, final]
}

export const SalesContextProvider = ({ children }: React.PropsWithChildren) => {
  const [initialDate, setInitialDate] = React.useState(setDefaultDates()[0])
  const [finalDate, setFinalDate] = React.useState(setDefaultDates()[1])

  const { data, loading, error } = useFetch<ISale[]>(`https://data.origamid.dev/vendas/?inicio=${initialDate}&final=${finalDate}`)
  return (
    <SalesContext.Provider value={{ data, loading, error, initialDate, setInitialDate, finalDate, setFinalDate }}>
      {children}
    </SalesContext.Provider>
  )
}