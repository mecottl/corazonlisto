// src/contexts/ProgressProvider.jsx
import React, { useState, useEffect } from 'react'
import ProgressContext from './ProgressContext'

// Proveedor de estado con conteo de tags A-D y resultados finales
export function ProgressProvider({ children }) {
  // Historial de nodos visitados
  const [history, setHistory] = useState(() => {
    const stored = localStorage.getItem('progress_history')
    return stored ? JSON.parse(stored) : ['start']
  })

  // Conteo de categorías A, B, C, D
  const [counts, setCounts] = useState({ A: 0, B: 0, C: 0, D: 0 })

  // ID del nodo actual
  const currentNodeId = history[history.length - 1] || 'start'

  // Persistir historial en localStorage
  useEffect(() => {
    localStorage.setItem('progress_history', JSON.stringify(history))
  }, [history])

  /**
   * Avanza al siguiente nodo y acumula tag
   * @param {string} nextId - ID del siguiente nodo
   * @param {string} tag    - Una de 'A','B','C','D'
   */
  function goTo(nextId, tag) {
    setHistory(prev => [...prev, nextId])
    if (tag && Object.prototype.hasOwnProperty.call(counts, tag)) {
      setCounts(prev => ({ ...prev, [tag]: prev[tag] + 1 }))
    }
  }

  /**
   * Reinicia el viaje, conteos y resultados
   */
  function resetJourney() {
    setHistory(['start'])
    setCounts({ A: 0, B: 0, C: 0, D: 0 })
  }

  // Determinar la etiqueta ganadora
  const winner = Object.entries(counts)
    .sort(([, a], [, b]) => b - a)[0]?.[0] || 'B'

  // Map de resultados finales
  const results = {
    A: `
⚠️ **Resultado A: Miedo a la soledad**

Tu recorrido refleja que tu principal motivación es evitar la soledad, y esto puede nublar otras necesidades emocionales.  
• **Qué significa**: Buscas compañía antes de sentirte pleno contigo mismx. Esto puede generar relaciones de dependencia.  
• **Próximos pasos**:  
  1. **Fortalece tu identidad**: Dedica tiempo a hobbies, proyectos personales y actividades que disfrutes en solitario.  
  2. **Autocompañía consciente**: Practica journaling o meditación para aprender a disfrutar tu propia compañía.  
  3. **Red de apoyo**: Conecta con amistades o grupos de interés; no se trata de evitar la soledad, sino de sentirte sostenidx desde tu autonomía.
  `.trim(),

    B: `
🎉 **Resultado B: Alta preparación y equilibrio**

Tus respuestas muestran excelente autoconocimiento, límites claros y comunicación asertiva. Estás listx para una relación sana.  
• **Qué significa**: Combinas independencia emocional con apertura a la intimidad.  
• **Próximos pasos**:  
  1. **Mantén la práctica**: Sigue reflexionando sobre tus emociones y compartiéndolas de forma clara.  
  2. **Profundiza la conexión**: Explora vulnerabilidad con tu pareja —mostrar inseguridades también crea confianza.  
  3. **Crecimiento conjunto**: Propongan metas y actividades para crecer unidxs sin perder tu individualidad.
  `.trim(),

    C: `
🔧 **Resultado C: Buen avance, sigue practicando comunicación**

Señalas fortalezas como reflexión ocasional y búsqueda de diálogo, pero aún te cuesta expresarte con consistencia.  
• **Qué significa**: Tienes la base, pero a veces evitas el conflicto o no comunicas tus necesidades a tiempo.  
• **Próximos pasos**:  
  1. **Ejercicios de asertividad**: Ensaya frases para expresar tu sentir (“Cuando X sucede, me siento Y…”).  
  2. **Feedback constante**: Pide retroalimentación a tu entorno cercano para calibrar tu estilo comunicativo.  
  3. **Mindfulness en conversación**: Antes de responder, tómate un segundo para sentir tu cuerpo y elegir tus palabras.
  `.trim(),

    D: `
⏸ **Resultado D: Necesitas apoyo profesional**

Tu recorrido revela heridas profundas y mecanismos de evitación o autosabotaje. Una relación ahora podría reactivar patrones dolorosos.  
• **Qué significa**: Buscas sanar viejas heridas a través de la pareja, y esto puede generar ciclos repetitivos.  
• **Próximos pasos**:  
  1. **Terapia o coaching**: Un espacio seguro para explorar y resolver traumas pasados.  
  2. **Prácticas de autocuidado**: Establece rutinas de descanso, journaling y actividades creativas que te nutran.  
  3. **Red de soporte**: Comparte tus procesos con amistades de confianza o grupos de apoyo especializados.
  `.trim()
  }

  const finalText = results[winner]

  return (
    <ProgressContext.Provider
      value={{ history, counts, currentNodeId, goTo, resetJourney, winner, finalText }}
    >
      {children}
    </ProgressContext.Provider>
  )
}
