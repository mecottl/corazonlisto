import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProgress from '../hooks/useProgress'
import '../styles/global.css'

export default function Home() {
  const navigate = useNavigate()
  const { resetJourney } = useProgress()

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