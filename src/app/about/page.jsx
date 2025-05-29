'use client';

import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AnimatedElement from '@/components/ui/AnimatedElement';
import ParticleBackground from '@/components/ui/ParticleBackground';
import Image from 'next/image';

export default function AboutPage() {
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
            <h1 className="text-[#d2d2d2] text-6xl md:text-7xl tracking-widest mb-16 text-center" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
              ABOUT US
            </h1>
          </AnimatedElement>
          
          <div className="max-w-4xl mx-auto">
            <AnimatedElement animation="fade-in" delay={0.2} duration={0.8}>
              <p className="text-white text-xl leading-relaxed mb-12">
                Little Genius is redefining how children engage with technology — turning screen time into meaningful, magical experiences powered by AI.
              </p>
              
              <p className="text-white text-xl leading-relaxed mb-12">
                We are an immersive platform where children don't just watch their favorite characters — they talk, play, and grow with them. Using real-time AI conversations, emotional recognition, and dynamic environments, Little Genius transforms beloved characters like Masha and the Bear into interactive companions that help kids learn and laugh in equal measure.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={0.3} duration={0.8}>
              <h2 className="text-[#f5b314] text-3xl mb-8 mt-16">What We Do</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <h3 className="text-[#f5b314] text-xl mb-4">AI-Powered Conversations</h3>
                  <p className="text-white">
                    Kids engage in natural dialogue with animated characters who recognize emotions and respond accordingly.
                  </p>
                </div>
                
                <div className="bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <h3 className="text-[#f5b314] text-xl mb-4">Learning Through Play</h3>
                  <p className="text-white">
                    Subtle lessons in math, friendship, and emotional development are woven into each interactive experience.
                  </p>
                </div>
                
                <div className="bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <h3 className="text-[#f5b314] text-xl mb-4">Parent-Centered Tools</h3>
                  <p className="text-white">
                    A built-in dashboard lets parents set learning goals and track their child's development.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={0.4} duration={0.8}>
              <h2 className="text-[#f5b314] text-3xl mb-8 mt-16">Our Vision</h2>
              <p className="text-white text-xl leading-relaxed mb-12">
                We believe that play is powerful — and with the right technology, it can be personal, emotional, and deeply educational. Our goal is to lead the next generation of storytelling and learning through innovative, character-driven AI.
              </p>
            </AnimatedElement>
            
            <AnimatedElement animation="fade-in" delay={0.5} duration={0.8}>
              <h2 className="text-[#f5b314] text-3xl mb-8 mt-16">Why It Matters</h2>
              <p className="text-white text-xl leading-relaxed mb-12">
                Today's families are looking for meaningful screen time. We're here to provide it — by combining beloved global IPs like Masha and the Bear with cutting-edge technology to create joyful, trusted, and impactful experiences for kids.
              </p>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}