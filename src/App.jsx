import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Carclinicpro from './pages/carclinicpro'
import PrivacyPolicy from './pages/privacypolicy'
import Signup from './pages/signup'
import SignIn from './pages/signin'
import ForgetPassword from './pages/forgetpassword'
import ResetPass from './pages/resetpass'
import Dashboard from './pages/dashboard'
import PrivateRoute from "./privateroute/PrivateRoute"

const App = () => {
  return (
    <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="car-clinic-pro" element={<Carclinicpro />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:id/:token" element={<ResetPass />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
          </Route>
        </Routes>
    </Router>
  )
}

export default App