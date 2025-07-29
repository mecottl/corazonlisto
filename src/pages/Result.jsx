import React from 'react'
import useProgress from '../hooks/useProgress'
import { useNavigate } from 'react-router-dom'
import html2canvas from 'html2canvas'
import journeyData from '../data/journey.json'
import '../styles/global.css'

export default function Result() {
  const { currentNodeId, resetJourney } = useProgress()
  const navigate = useNavigate()

  // Encuentra el nodo final según el ID
  const finalNode = journeyData.find(n => n.id === currentNodeId)
  const finalText = finalNode ? finalNode.text : 'Resultado no encontrado'

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
        <h2 className="text-2xl font-semibold mb-4">Tu resultado</h2>
        <p className="italic">“{finalText}”</p>
      </div>

      <div className="flex space-x-4 mt-6">
        <button className="button button-secondary" onClick={handleDownload}>
          Descargar Resultado
        </button>
        <button className="button button-tertiary" onClick={handleRestart}>
          Reiniciar
        </button>
      </div>
    </div>
  )
}