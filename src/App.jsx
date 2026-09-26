import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Root App component — manages dark mode state and renders all sections
function App() {
  const [darkMode, setDarkMode] = useState(true)

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    // 'dark' class on outermost div enables all dark: Tailwind variants
    // @custom-variant in index.css makes dark: respond to .dark on any ancestor
    <div className={darkMode ? 'dark' : ''} style={{ colorScheme: darkMode ? 'dark' : 'light' }}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
