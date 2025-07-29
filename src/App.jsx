// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ProgressProvider} from './contexts/ProgressProvider'
import Home from './pages/Home'
import Journey from './pages/Journey'
import Result from './pages/Result'   

function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <Routes>
          <Route path="/"       element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/result"  element={<Result />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </ProgressProvider>
    </BrowserRouter>
  )
}

export default App
