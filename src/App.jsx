import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import JourneySection from './pages/JourneySection'
import Summary from './pages/Summary'
import Settings from './pages/Settings'
import Reset from './pages/Reset'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey/:sectionId" element={<JourneySection />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
