import React from "react"

type InputProps = React.ComponentProps<'input'> & {
  style?: {
    general?: React.CSSProperties,
    input?: React.CSSProperties,
    label?: React.CSSProperties,
  },
  id: string,
  label: string,
}

export default function Input({ style, id, label, ...props }: InputProps) {
  return (
    <div style={style?.general}>
      <label style={style?.label} htmlFor={id}>{label}</label>
      <input style={style?.input} id={id} {...props} />
    </div>
  )
}