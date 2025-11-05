import { Box } from '@mui/material'
import './App.css'
//import { Navbar } from './components/Navbar'
import ParticlesBackground from './components/ParticlesBackground'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {


  return (
<Box className="bg-[#0d1117] text-white min-h-screen relative">
      {/* Global particle background */}
      <ParticlesBackground />

      {/* Navbar (fixed on top of particles) */}
      <Navbar />

      {/* Page sections */}
      <main className="relative z-10 flex flex-col">
        <Home />
        <About />
        {/* <Projects /> */}
        <Skills />
        <Projects />
        <Contact />
      </main>
    </Box>
  )
}

export default App
