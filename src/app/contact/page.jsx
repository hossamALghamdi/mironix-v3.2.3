'use client';

import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AnimatedElement from '@/components/ui/AnimatedElement';
import ParticleBackground from '@/components/ui/ParticleBackground';
import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
        subject: '',
        message: '',
      });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
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
      
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <AnimatedElement animation="fade-in" duration={0.8}>
            <h1 className="text-[#d2d2d2] text-6xl md:text-7xl font-staatliches tracking-widest mb-8 text-center">
              CONTACT US
            </h1>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.2} duration={0.8}>
            <p className="text-white text-xl md:text-2xl text-center max-w-3xl mx-auto mb-16">
              Have questions or want to learn more about Marionix? 
              We'd love to hear from you!
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <AnimatedElement animation="slide-right" delay={0.3} duration={0.8}>
              <div className="bg-[#0a0e24] p-8 rounded-lg shadow-xl h-full">
                <h2 className="text-3xl font-bold mb-6 text-[#f5b314]">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#161a36] p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f5b314]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Phone</h3>
                      <p className="text-gray-300">+966 56789103</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#161a36] p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f5b314]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Email</h3>
                      <p className="text-gray-300"><a href="mailto:Info@lucamiro.me" className="underline hover:text-[#f5b314]">Info@lucamiro.me</a></p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#161a36] p-3 rounded-full mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f5b314]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-1">Location</h3>
                      <p className="text-gray-300"><li>JEDDAH, SAUDI ARABIA</li>
        <li>DUBAI, UAE</li>
        <li>USA</li>
        <li>RUSSIA</li>
        <li>KZ</li></p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-xl font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" className="bg-[#161a36] hover:bg-[#f5b314] transition-colors duration-300 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a href="https://twitter.com" className="bg-[#161a36] hover:bg-[#f5b314] transition-colors duration-300 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/studio13_lmi" className="bg-[#161a36] hover:bg-[#f5b314] transition-colors duration-300 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/luca-miro-imagineering" className="bg-[#161a36] hover:bg-[#f5b314] transition-colors duration-300 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedElement>
            
            {/* Contact Form */}
            <AnimatedElement animation="slide-left" delay={0.3} duration={0.8}>
              {!isSubmitted ? (
                <form 
                  onSubmit={handleSubmit}
                  className="bg-[#0a0e24] p-8 rounded-lg shadow-xl"
                >
                  <h2 className="text-3xl font-bold mb-6 text-[#f5b314]">Send a Message</h2>
                  
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-white mb-2">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#161a36] border border-[#2a2e45] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f5b314]"
                      placeholder="John Doe"
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
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-white mb-2">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#161a36] border border-[#2a2e45] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f5b314]"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-white mb-2">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      className="w-full px-4 py-3 bg-[#161a36] border border-[#2a2e45] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#f5b314]"
                      placeholder="Type your message here..."
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
                        Sending...
                      </>
                    ) : "Send Message"}
                  </Button>
                </form>
              ) : (
                <div className="bg-[#0a0e24] p-8 rounded-lg shadow-xl text-center h-full flex flex-col items-center justify-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                  <p className="text-lg mb-6">
                    Your message has been sent successfully. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="bg-[#f5b314] hover:bg-[#d89c10] text-black font-bold py-3 px-6 rounded-md transition-colors duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </AnimatedElement>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}