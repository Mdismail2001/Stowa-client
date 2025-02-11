import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './pages/Index'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/i" element={<IndexPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
