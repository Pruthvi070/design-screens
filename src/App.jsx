import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Project from './Components/Project.jsx'
import Contactus from './Components/Contactus.jsx'
import About from './Components/About.jsx'
import Services from './Components/Services.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App
