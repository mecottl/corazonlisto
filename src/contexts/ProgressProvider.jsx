import { createContext, useState, useEffect } from 'react';


// 1. Creamos el contexto
const ProgressContext = createContext();

// 2. Provider que envuelve la app

export function ProgressProvider({ children }) {
  // Historial de nodos recorridos (IDs)
  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem('progress_history')
    return stored ? JSON.parse(stored) : []
  })

  // El nodo actual es el último que hay en el historial, o 'start' por defecto
  const currentNodeId = history.length > 0 ? history[history.length - 1] : 'start'

  // Sincronizamos localStorage cada vez que cambia el historial
  useEffect(() => {
    localStorage.setItem('progress_history', JSON.stringify(history))
  }, [history])

  // Función para avanzar a un nodo nuevo
  const goTo = (nodeId) => {
    setHistory(prev => [...prev, nodeId])
  }

  // Función para reiniciar todo el viaje
  const resetJourney = () => {
    setHistory([])
  }

  return (
    <ProgressContext.Provider value={{ history, currentNodeId, goTo, resetJourney }}>
      {children}
    </ProgressContext.Provider>
  )
}
