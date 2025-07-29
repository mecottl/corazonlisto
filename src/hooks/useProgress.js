import { useProgressContext } from '../contexts/ProgressContext'

// Default export para importar simplemente `useProgress()`
export default function useProgress() {
  return useProgressContext()
}
