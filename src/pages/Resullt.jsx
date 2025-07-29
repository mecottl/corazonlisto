import React from "react"
import UseProgress from "../hooks/useProgress"
import { useNavigate } from "react-router-dom"
import html2canvas from 'html2canvas'

const phrases = [
  "¡Estás listo para conectar emocionalmente!",
  "Tu autoconocimiento te empodera.",
  "Cada paso cuenta, sigue adelante.",
  "Tu capacidad de amar comienza dentro de ti.",
  "La honestidad contigo mismx abre puertas."
]

export default function Result() {
  const { history, resetJourney } = UseProgress()
  const navigate = useNavigate()

  const phrase = phrases[Math.min(history.length - 1, phrases.length - 1)]

  const handleDownload = () => {
    const node = document.getElementById('result-card')
    if (!node) return
    html2canvas(node).then(canvas => {
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
    <div>
      <div id="result-card">
        <h2>
          Tu resumen
        </h2>
        <p>
          Has completado {history.length} pasos en tu viaje
        </p>
        <p>{phrase}</p>
      </div>

      <div>
        <button onClick={handleDownload}>Descargar resultado</button>
        <button onClick={handleRestart}>reiniciar</button>
      </div>
    </div>
  )
}