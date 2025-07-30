import { useEffect } from 'react'
import journeydata from '../data/journey.json'
import useProgress from '../hooks/useProgress'
import Node from '../components/Node'
import ResetButton from '../components/ResetButton'
import { useNavigate } from 'react-router-dom'
import '../styles/journey.css'

export default function Journey() {
  const { currentNodeId, goTo } = useProgress()
  const navigate = useNavigate()

  const node = journeydata.find(n => n.id === currentNodeId)

  useEffect(() => {
    if (node && node.options.length === 0) {
      navigate('/result')
    }
  }, [node, navigate])

  if (!node) return <p>Cargando...</p>

  return (
    <div class='journey'>
      <header>
        <nav class="container">
          <a href="/" class="logo">💕 LoveReady</a>
        </nav>
      </header>
      <div>
        <ResetButton />
        <div>
          <Node node={node} onSelect={goTo} />
        </div>
      </div>
    </div>
  )
}