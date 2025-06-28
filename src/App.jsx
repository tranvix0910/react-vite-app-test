import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Contact from './pages/Contact'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  )
}

export default App
