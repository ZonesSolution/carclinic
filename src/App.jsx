import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Carclinicpro from './pages/carclinicpro'
import PrivacyPolicy from './pages/privacypolicy'

const App = () => {
  return (
    <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-clinic-pro" element={<Carclinicpro />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
    </Router>
  )
}

export default App