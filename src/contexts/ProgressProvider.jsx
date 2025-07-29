// src/contexts/ProgressProvider.jsx
import React, { useState, useEffect } from 'react'
import ProgressContext from './ProgressContext'

// Proveedor de estado con conteo de tags A-D y resultados finales
export function ProgressProvider({ children }) {
  // Historial de nodos visitados
  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem('progress_history')
    return stored ? JSON.parse(stored) : ['start']
  })

  // Conteo de categorías A, B, C, D
  const [counts, setCounts] = useState({ A: 0, B: 0, C: 0, D: 0 })

  // ID del nodo actual
  const currentNodeId = history[history.length - 1] || 'start'

  // Persistir historial en localStorage
  useEffect(() => {
    localStorage.setItem('progress_history', JSON.stringify(history))
  }, [history])

  /**
   * Avanza al siguiente nodo y acumula tag
   * @param {string} nextId - ID del siguiente nodo
   * @param {string} tag    - Una de 'A','B','C','D'
   */
  function goTo(nextId, tag) {
    setHistory(prev => [...prev, nextId])
    if (tag && Object.prototype.hasOwnProperty.call(counts, tag)) {
      setCounts(prev => ({ ...prev, [tag]: prev[tag] + 1 }))
    }
  }

  /**
   * Reinicia el viaje, conteos y resultados
   */
  function resetJourney() {
    setHistory(['start'])
    setCounts({ A: 0, B: 0, C: 0, D: 0 })
  }

  // Determinar la etiqueta ganadora
  const winner = Object.entries(counts)
    .sort(([, a], [, b]) => b - a)[0]?.[0] || 'B'

  // Map de resultados finales
  const results = {
    A: "⚠️ Resultado A: Puede venir del miedo a la soledad. Trabaja el autoconocimiento.",
    B: "🎉 Resultado B: Muy equilibradx para una relación sana.",
    C: "🔧 Resultado C: Buen camino pero sigue practicando comunicación.",
    D: "⏸ Resultado D: Quizá necesites apoyo profesional o coaching."
  }

  const finalText = results[winner]

  return (
    <ProgressContext.Provider
      value={{ history, counts, currentNodeId, goTo, resetJourney, winner, finalText }}
    >
      {children}
    </ProgressContext.Provider>
  )
}
