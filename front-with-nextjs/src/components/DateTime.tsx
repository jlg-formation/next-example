"use client"
import { formatDate } from "@/utils/date"
import { useEffect, useMemo, useState } from "react"

export default function DateTime() {
  const [dateTime, setDateTime] = useState(new Date())
  const dateTimeStr = useMemo(() => {
    return formatDate(dateTime)
  }, [dateTime])

  useEffect(() => {
    const timer = setInterval(() => {
      const newDate = new Date()
      console.log("newDate: ", newDate)
      setDateTime(newDate)
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <p>Date/Heure : {dateTimeStr}</p>
    </>
  )
}
