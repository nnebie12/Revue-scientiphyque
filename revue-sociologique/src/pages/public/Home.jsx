import { Hero } from '../../components/sections/Hero'
import { AboutSection } from '../../components/sections/AboutSection'
import { ArticlesSection } from '../../components/sections/ArticlesSection'
import { Sidebar } from '../../components/layout/Sidebar'
import { useState } from 'react'
import About from './about'

const Home = () => {
  const [activeTab, setActiveTab] = useState('apercu');

  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <AboutSection />
            <About />
            <ArticlesSection activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Home;