// src/pages/Result.jsx
import React from 'react'
import useProgress from '../hooks/useProgress'
import { useNavigate } from 'react-router-dom'
import html2canvas from 'html2canvas'
import '../styles/global.css'

export default function Result() {
  // Ya no necesitas currentNodeId ni journeyData
  const { finalText, resetJourney } = useProgress()
  const navigate = useNavigate()

  const handleDownload = () => {
    const nodeEl = document.getElementById('result-card')
    if (!nodeEl) return
    html2canvas(nodeEl).then(canvas => {
      const link = document.createElement('a')
      link.download = 'resultado.png'
      link.href = canvas.toDataURL('image/png')
      link.click()
    })
  }

  const handleRestart = () => {
    resetJourney()
    navigate('/')
  }

  return (
    <div className="container centered">
      <div id="result-card" className="result-card">
        <h2>Tu resultado</h2>
        <p>“{finalText}”</p>
      </div>
      <div>
        <button onClick={handleDownload}>
          Descargar Resultado
        </button>
        <button className="button button-tertiary" onClick={handleRestart}>
          Reiniciar
        </button>
      </div>
    </div>
  )
}
