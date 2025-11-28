import './App.css'
import { MobileMenu } from './components/MobileMenu'
import { Navbar } from './components/NavBar'
import { useState} from "react"
import Home from './components/sections/Home'
import About from './components/sections/About'
import Projects from './components/sections/Projects'

function App() {
  const [menuOpen, setMenuOpen]= useState(false)

  return (
    <>
      <div className="min-h-screen transition-opacity duration-700 bg-black text-gray-100">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Projects />
      </div>
    </>
  )
}

export default App
