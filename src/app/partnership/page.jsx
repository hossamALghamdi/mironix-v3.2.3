'use client';

import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AnimatedElement from '@/components/ui/AnimatedElement';
import ParticleBackground from '@/components/ui/ParticleBackground';
import Button from '@/components/ui/Button'; // <-- Add this import

export default function PartnershipPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    partnershipIdea: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        partnershipIdea: '',
      });
    } catch (err) {
      setError('There was an error submitting your request. Please try again.');
      console.error('Submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <main className="min-h-screen bg-[#040819] text-white overflow-x-hidden">
      <ParticleBackground 
        particleCount={100} 
        color="#f5b314" 
        opacity={0.3} 
        speed={0.5} 
      />
      <Header />
      
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <AnimatedElement animation="fade-in" duration={0.8}>
            <h1 className="text-[#d2d2d2] text-6xl md:text-7xl tracking-widest mb-8 text-center" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
              PARTNER WITH US
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.2} duration={0.8}>
            <p className="text-white text-xl md:text-2xl text-center max-w-3xl mx-auto mb-16">
              Join forces with Marionix to create innovative AI experiences for children. 
              Share your partnership idea and let's build something amazing together.
            </p>
          </AnimatedElement>
          
          {!isSubmitted ? (
            <AnimatedElement animation="fade-in" delay={0.3} duration={0.8}>
              <form 
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-[#0a0e24] p-8 rounded-lg shadow-xl"
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#161a36] border border-[#2a2e45] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f5b314]"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-white mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#161a36] border border-[#2a2e45] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f5b314]"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="company" className="block text-white mb-2">Company/Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#161a36] border border-[#2a2e45] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f5b314]"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#161a36] border border-[#2a2e45] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f5b314]"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>
                
                <div className="mb-8">
                  <label htmlFor="partnershipIdea" className="block text-white mb-2">Partnership Idea *</label>
                  <textarea
                    id="partnershipIdea"
                    name="partnershipIdea"
                    value={formData.partnershipIdea}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-[#161a36] border border-[#2a2e45] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f5b314]"
                    placeholder="Describe your partnership idea and how we can collaborate..."
                  ></textarea>
                </div>
                
                {error && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-md text-white">
                    {error}
                  </div>
                )}
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-black font-bold py-3 px-6 rounded-md flex items-center justify-center"
                  variant="primary"
                  size="large"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : "Submit Partnership Request"}
                </Button>
              </form>
            </AnimatedElement>
          ) : (
            <AnimatedElement animation="fade-in" duration={0.8}>
              <div className="max-w-2xl mx-auto bg-[#0a0e24] p-8 rounded-lg shadow-xl text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p className="text-lg mb-6">
                  We've received your partnership request and will review it shortly. 
                  Our team will contact you soon to discuss the next steps.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#f5b314] hover:bg-[#d89c10] text-black font-bold py-3 px-6 rounded-md transition-colors duration-300"
                >
                  Submit Another Request
                </button>
              </div>
            </AnimatedElement>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}