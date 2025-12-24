import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Contact from './pages/Contact'
import MultiSurfaceAgent from './pages/MultiSurfaceAgent'
import GenAIFramework from './pages/GenAIFramework'
import PromptStudio from './pages/PromptStudio'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/multi-surface-agent" element={<MultiSurfaceAgent />} />
          <Route path="/genai-framework" element={<GenAIFramework />} />
          <Route path="/prompt-studio" element={<PromptStudio />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

