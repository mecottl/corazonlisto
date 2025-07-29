import React from 'react'
import '../styles/global.css'
import useProgress from '../hooks/useProgress'
import { useNavigate } from 'react-router-dom'

export default function ResetButton() {
  const { resetJourney } = useProgress()
  const navigate = useNavigate()

  const handleReset = () => {
    resetJourney()
    navigate('/')
  }

  return (
    <button className="reset-button" onClick={handleReset}>
      Reiniciar
    </button>
  )
}
