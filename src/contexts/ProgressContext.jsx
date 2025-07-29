import { createContext, useContext } from 'react'

// Creamos el Context
const ProgressContext = createContext()

// Hook para consumir el Context
export function useProgressContext() {
  const ctx = useContext(ProgressContext)
  if (!ctx) {
    throw new Error('useProgressContext debe usarse dentro de ProgressProvider')
  }
  return ctx
}

// Exportamos el Context por defecto para que el Provider lo use
export default ProgressContext
