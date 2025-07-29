import { useContext } from 'react'
import ProgressContext from './ProgressContext'

export function useProgressContext() {
  const ctx = useContext(ProgressContext)
  if (!ctx) throw new Error('…')
  return ctx
}
