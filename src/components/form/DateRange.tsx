import React from "react";
import Input from "./Input"
import { useSalesContext } from "../../context/salesContext";

const generalStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap)'
}
const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle
}
const inputStyle: React.CSSProperties = {
  border: 'none',
  fontFamily: 'monospace',
  ...generalStyle
}

export default function DateRange() {
  const { initialDate, setInitialDate, finalDate, setFinalDate } = useSalesContext()

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <Input
        style={{ input: inputStyle, label: labelStyle }}
        id="initialDate"
        label="Data inicial"
        type="date"
        value={initialDate}
        placeholder="Selecione a data inicial"
        onChange={({ target }) => { setInitialDate(target.value) }}
      />
      <Input
        style={{ input: inputStyle, label: labelStyle }}
        id="finalDate"
        label="Data final"
        type="date"
        value={finalDate}
        placeholder="Selecione a data final"
        onChange={({ target }) => { setFinalDate(target.value) }}
      />
    </form>
  )
}