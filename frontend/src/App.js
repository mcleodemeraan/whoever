import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Header, 
  GazaReliefModal, 
  HeroSection, 
  ProgramsSection, 
  ImpactStats, 
  GetInvolvedSection, 
  NewsSection, 
  Footer 
} from './components';

function App() {
  const [showModal, setShowModal] = useState(false);

  // Show modal after 2 seconds (similar to the original site)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {/* Gaza Relief Modal */}
      <GazaReliefModal showModal={showModal} setShowModal={setShowModal} />
      
      {/* Header */}
      <Header showModal={showModal} setShowModal={setShowModal} />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Impact Stats */}
      <ImpactStats />
      
      {/* Programs Section */}
      <ProgramsSection />
      
      {/* Get Involved Section */}
      <GetInvolvedSection />
      
      {/* News Section */}
      <NewsSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;