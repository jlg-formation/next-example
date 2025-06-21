"use client"
import { useEffect, useRef, useState } from "react"

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
      <button className="btn w-24" onClick={handleClick}>
        {running ? "Stop" : "Start"}
      </button>
    </>
  )
}
