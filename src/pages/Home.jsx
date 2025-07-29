import React from 'react'
import { UseNavigate } from 'react-router-dom'
import UseProgress from '../hooks/useProgress'

export default function home() {
  const navigate = UseNavigate()
  const { resetJourney } = UseProgress()

  const handleStart = () => {
    resetJourney()
    navigate('/journey')
  }

  return (
    <div>
      <h1>
        Autoconocimiento emocional
      </h1>
      <button onClick={handleStart}>Empezar</button>
    </div>
  )
}