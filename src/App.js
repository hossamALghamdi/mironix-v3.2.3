import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatIsSection from './components/WhatIsSection';
import WhyApproachSection from './components/WhyApproachSection';
import OpportunitySection from './components/OpportunitySection';
import HowItWorksSection from './components/HowItWorksSection';
import WhyPartnerSection from './components/WhyPartnerSection';
import WhatYouGainSection from './components/WhatYouGainSection';
import FutureSection from './components/FutureSection';
import Footer from './components/Footer';
import Partnership from './components/Partnership';
import BackgroundSlider from './components/BackgroundSlider';

function App() {
  return (
    <Router>
      <div className="App">
        <BackgroundSlider />
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <WhatIsSection />
              <WhyApproachSection />
              <OpportunitySection />
              <HowItWorksSection />
              <WhyPartnerSection />
              <WhatYouGainSection />
              <FutureSection />
            </>
          } />
          <Route path="/partnership" element={<Partnership />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
