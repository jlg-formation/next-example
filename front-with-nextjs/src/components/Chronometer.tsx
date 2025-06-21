"use client"
import { useEffect, useRef, useState } from "react"
import Button from "./Button"

export default function DateTime() {
  const [counter, setCounter] = useState(0)
  const [running, setRunning] = useState(false)

  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined)

  useEffect(() => {
    if (running) {
      setCounter(0)
      timer.current = setInterval(() => {
        setCounter((counter) => counter + 1)
      }, 1000)
      return () => {
        if (timer.current) {
          clearInterval(timer.current)
        }
      }
    }

    if (timer.current) {
      clearInterval(timer.current)
    }
  }, [running])

  const handleClick = () => {
    setRunning(!running)
  }

  return (
    <>
      <p>Chrono : {counter}</p>
      <Button className="w-48" onClick={handleClick}>
        {running ? "Stop" : "Start"}
      </Button>
    </>
  )
}
