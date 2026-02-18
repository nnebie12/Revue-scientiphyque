import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Footer } from './components/footer/Footer'
import { Header } from './components/hearder/Header'
import { MobileMenu } from './components/layout/MobileMenu'

import Login from './pages/auth/Login'
import About from './pages/public/About'
import Articles from './pages/public/Articles'
import Contact from './pages/public/Contact'
import Home from './pages/public/Home'

import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Le Header et le MobileMenu restent visibles sur toutes les pages */}
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu isOpen={menuOpen} />
        
        {/* Contenu dynamique selon l'URL */}
        <main className="flex-grow">
          <Routes>
            {/* Route Accueil : On y met tes composants actuels */}
            <Route path="/" element={<Home />} />
            
            {/* Autres Routes Publiques */}
            <Route path="/articles" element={<Articles />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />

            {/* Routes Admin (Protection à ajouter plus tard) */}
            <Route path="/admin/AdminDashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;