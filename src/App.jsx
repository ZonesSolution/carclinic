import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Carclinicpro from './pages/carclinicpro'
import PrivacyPolicy from './pages/privacypolicy'
import Signup from './pages/signup'
import SignIn from './pages/signin'
import ForgetPassword from './pages/forgetpassword'
import Verify from './pages/verify'
import Dashboard from './pages/dashboard'

const App = () => {
  return (
    <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/car-clinic-pro" element={<Carclinicpro />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>
  )
}

export default App