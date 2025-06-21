import { ReactNode } from "react"

export default function Button(p: {
  [key: string]: unknown
  children?: ReactNode
  className?: string
}) {
  return (
    <button {...p} className={p.className + " btn"}>
      {p.children}
    </button>
  )
}
