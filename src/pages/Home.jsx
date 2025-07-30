import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProgress from '../hooks/useProgress'
import '../styles/landing.css'

export default function Home() {
  const navigate = useNavigate()
  const { resetJourney } = useProgress()

  const handleStart = () => {
    resetJourney()
    navigate('/journey')
  }

  return (
    <>
      <header>
        <nav class="container">
          <a href="/" class="logo">💕 LoveReady</a>
        </nav>
      </header>
      <main>
        <section id="inicio" class="hero">
          <div class="container">
            <h1>¿Estás Listo para el Amor?</h1>
            <p class="subtitle">Descubre tu nivel de preparación emocional para una relación con nuestra encuesta personalizada y científicamente respaldada</p>
            <button onClick={handleStart} class="cta-button">Hacer la Encuesta Gratis</button>
          </div>
        </section>

        <section class="features">
          <div class="container">
            <h2>¿Por Qué Hacer Nuestra Encuesta?</h2>
            <div class="features-grid">
              <div class="feature-card">
                <div class="feature-icon">🧠</div>
                <h3>Autoconocimiento Profundo</h3>
                <p>Descubre aspectos de tu personalidad y madurez emocional que quizás no conocías</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">💡</div>
                <h3>Insights Personalizados</h3>
                <p>Recibe recomendaciones específicas basadas en tus respuestas y perfil emocional</p>
              </div>
              <div class="feature-card">
                <div class="feature-icon">📊</div>
                <h3>Resultados Científicos</h3>
                <p>Basado en investigación psicológica sobre relaciones y compatibilidad emocional</p>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" class="how-it-works">
          <div class="container">
            <h2>Cómo Funciona</h2>
            <div class="steps">
              <div class="step">
                <div class="step-number">1</div>
                <h3>Responde la Encuesta</h3>
                <p>Contesta preguntas honestas sobre tus emociones, experiencias y expectativas</p>
              </div>
              <div class="step">
                <div class="step-number">2</div>
                <h3>Análisis Personalizado</h3>
                <p>Nuestro algoritmo analiza tus respuestas y evalúa tu preparación emocional</p>
              </div>
              <div class="step">
                <div class="step-number">3</div>
                <h3>Recibe tus Resultados</h3>
                <p>Obtén un reporte detallado con tu nivel de preparación y consejos personalizados</p>
              </div>
              <div class="step">
                <div class="step-number">4</div>
                <h3>Plan de Acción</h3>
                <p>Sigue nuestras recomendaciones para mejorar tu readiness emocional</p>
              </div>
            </div>
          </div>
        </section>


        <section class="final-cta">
          <div class="container">
            <h2>Comienza tu Viaje hacia el Amor</h2>
            <p>No esperes más. Descubre si estás realmente preparado para una relación duradera y significativa.</p>
            <button onClick={handleStart} class="cta-button">Hacer la Encuesta Ahora</button>
          </div>
        </section>
      </main>

      <footer id="contacto">
        <div class="container">
          <div class="footer-links">
            <a href="#privacidad">Privacidad</a>
            <a href="#terminos">Términos</a>
            <a href="#contacto">Contacto</a>
            <a href="#ayuda">Ayuda</a>
          </div>
        </div>
      </footer>
    </>           
  )
}