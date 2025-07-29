import React, { useState, useEffect } from 'react'
import ProgressContext from './ProgressContext'

export function ProgressProvider({ children }) {
  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem('progress_history')
    return stored ? JSON.parse(stored) : []
  })

  const currentNodeId = history.length > 0 ? history[history.length - 1] : 'start'

  useEffect(() => {
    localStorage.setItem('progress_history', JSON.stringify(history))
  }, [history])

  const goTo = (nodeId) => setHistory((prev) => [...prev, nodeId])
  const resetJourney = () => setHistory([])

  return (
    <ProgressContext.Provider value={{ history, currentNodeId, goTo, resetJourney }}>
      {children}
    </ProgressContext.Provider>
  )
}
