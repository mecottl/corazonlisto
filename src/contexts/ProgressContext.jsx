import { useContext } from 'react';
import { ProgressProvider } from './ProgressProvider.jsx'

export function useProgressContext() {
  const ctx = useContext(ProgressProvider)
  if (!ctx) {
    throw new Error('useProgressContext debe usarse dentro de ProgressProvider')
  }
  return ctx
}
