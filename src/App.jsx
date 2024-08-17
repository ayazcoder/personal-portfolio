import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './components/about/About'
import { Blog } from './components/blog/Blog'
import { Contact } from './components/contact/Contact'
import { Home } from './components/home/Home'
import { Services } from './components/services/Services'
import Layout from './layout/Layout'
import { CustomCursor } from './components/customCursor/CustomCursor'
import { Portfolio } from './components/portfolio/Portfolio.jsx'

function App() {
  return (
    <>
      <CustomCursor />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    </>
  )
}

export default App