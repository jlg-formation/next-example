"use client"
import { formatDate } from "@/utils/date"
import { useEffect, useMemo, useState } from "react"

let counter = 0

export default function Chrono() {
  const [dateTime, setDateTime] = useState(new Date())
  const dateTimeStr = useMemo(() => {
    return formatDate(dateTime)
  }, [dateTime])

  console.log("rendering chrono")

  useEffect(() => {
    counter++
    console.log("programming a timer", counter)
    const timer = setInterval(() => {
      const newDate = new Date()
      console.log("newDate: ", newDate)
      setDateTime(newDate)
    }, 1000)

    return () => {
      console.log("clear timer")
      clearInterval(timer)
    }
  }, [])

  return (
    <>
      <p>Date/Heure : {dateTimeStr}</p>
      {/* <p>Chrono : {chronoStr} </p> */}
    </>
  )
}
