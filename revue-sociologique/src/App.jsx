import { useState } from 'react'
import { Header } from './components/layout/Header'
import { MobileMenu } from './components/layout/MobileMenu'
import { Hero } from './components/sections/Hero'
import { AboutSection } from './components/sections/AboutSection'
import { FeaturesSection } from './components/sections/FeaturesSection'
import { ArticlesSection } from './components/sections/ArticlesSection'
import { Sidebar } from './components/layout/Sidebar'
import { Footer } from './components/layout/Footer'
import './App.css'

function App() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('apercu');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu isOpen={menuOpen} />
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AboutSection />
            <FeaturesSection />
            <ArticlesSection activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <Sidebar />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App
