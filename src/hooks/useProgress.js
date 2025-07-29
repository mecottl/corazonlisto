import { useProgressContext } from '../contexts/useProgressContext'

// Default export para importar simplemente `useProgress()`
export default function useProgress() {
  return useProgressContext()
}
