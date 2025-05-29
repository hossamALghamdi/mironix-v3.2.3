import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/common/HeroSection';
import Card from '@/components/common/Card';
import ContactButton from '@/components/ui/ContactButton';
import AnimatedElement from '@/components/ui/AnimatedElement';
import ParallaxContainer from '@/components/ui/ParallaxContainer';
import ParticleBackground from '@/components/ui/ParticleBackground';
//import FloatingElements from '@/components/ui/FloatingElements';
import InteractiveCharacter from '@/components/ui/InteractiveCharacter';
import ScrollTriggeredAnimation from '@/components/ui/ScrollTriggeredAnimation';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#040819] text-white overflow-x-hidden">
      <ParticleBackground 
        particleCount={100} 
        color="#f5b314" 
        opacity={0.3} 
        speed={0.5} 
      />
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Interactive Character Display */}
      <section className="py-20 relative snap-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center">
          <ScrollTriggeredAnimation animation="fade-in" duration={0.8}>
            <h2 className="text-[#d2d2d2] text-6xl md:text-7xl tracking-widest mb-16 text-center" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
              MEET MARIONIX
            </h2>
          </ScrollTriggeredAnimation>
          
          <div className="flex justify-center">
            {/* BitHuman Agent Container */}
            <div id="my-agent-container"></div>
            
            {/* BitHuman Agent Script */}
            <Script id="bithuman-script" strategy="afterInteractive">
              {`
                window.bitHumanConfig = { 
                    agentCode: "A80WAK5430", 
                    apiKey: "public_JvSicLVcYGKyu7vJG44TaP7", 
                    container: "#my-agent-container", 
                    width: "350px", 
                    height: "707px" 
                }; 
                
                (function(d) { 
                    var s = d.createElement('script'); 
                    s.src = "https://repo.one.bithuman.io/resources/app/embed.js?v=" + new Date().getTime(); 
                    s.async = true; 
                    s.onload = function() { 
                        if (window.bitHuman && window.bitHuman.init) { 
                            window.bitHuman.init(window.bitHumanConfig); 
                        } 
                    }; 
                    d.head.appendChild(s); 
                })(document);
              `}
            </Script>
          </div>
          
          <ScrollTriggeredAnimation animation="fade-in" delay={0.3} duration={0.8}>
            <p className="text-white text-2xl text-center max-w-4xl mx-auto mt-8">
              
            </p>
          </ScrollTriggeredAnimation>
        </div>
      </section>
      
      {/* What is Little Genius Section */}
      <section className="py-20 relative snap-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <ScrollTriggeredAnimation animation="fade-in" duration={0.8}>
            <h2 className="text-[#d2d2d2] text-6xl md:text-7xl font-medium tracking-widest mb-16 text-center" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
              WHAT IS LITTLE GENIUS?
            </h2>
          </ScrollTriggeredAnimation>
          
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedElement animation="slide-up" delay={0.1} duration={0.6}>
              <div className="flex flex-col items-center text-center">
                <Image 
                  src="/images/img_chatbot.png" alt="AI conversations" 
                  width={90} 
                  height={90} 
                  className="mb-4 hover:scale-110 transition-transform duration-300"
                />
                <p className="text-white text-xl font-medium">
                  AI conversations in real time
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={0.2} duration={0.6}>
              <div className="flex flex-col items-center text-center">
                <Image 
                  src="/images/img_show_1.png" alt="Dynamic scenes" 
                  width={89} 
                  height={89} 
                  className="mb-4 hover:scale-110 transition-transform duration-300"
                />
                <p className="text-white text-xl font-medium">
                  Dynamic scenes
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={0.3} duration={0.6}>
              <div className="flex flex-col items-center text-center">
                <Image 
                  src="/images/img_smile_1.png" alt="Emotion & object recognition" 
                  width={89} 
                  height={89} 
                  className="mb-4 hover:scale-110 transition-transform duration-300"
                />
                <p className="text-white text-xl font-medium">
                  Emotion & object recognition
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={0.4} duration={0.6}>
              <div className="flex flex-col items-center text-center">
                <Image 
                  src="/images/img_responsivedevices_1.png" alt="Parental dashboard" 
                  width={80} 
                  height={80} 
                  className="mb-4 hover:scale-110 transition-transform duration-300"
                />
                <p className="text-white text-xl font-medium">
                  Parental<br />dashboard
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Why This Approach Section */}
      <section className="py-20 relative snap-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <AnimatedElement animation="fade-in" duration={0.8}>
            <h2 className="text-[#d2d2d2] text-6xl md:text-7xl tracking-widest mb-16 text-center" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
              WHY THIS APPROACH?
            </h2>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedElement animation="slide-right" delay={0.1} duration={1}>
              <div className="bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <p className="text-white text-xl font-medium text-center">
                  Globally recognized and loved by children and parents alike
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-right" delay={0.1} duration={1}>
              <div className="bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <p className="text-white text-xl font-medium text-center">
                  Already rich with visual and emotional depth
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-right" delay={0.2} duration={1}>
              <div className="bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <p className="text-white text-xl font-medium text-center">
                  Character personalities are perfect for interactive storytelling
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-right" delay={0.2} duration={1}>
              <div className="bg-transparent backdrop-blur-md p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <p className="text-white text-xl font-medium text-center">
                  Built-in educational and emotional growth potential
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
        
        {/* Background elements - REMOVED */}
      </section>
      
      {/* The Opportunity Section */}
      <section className="py-20 relative snap-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <AnimatedElement animation="fade-in" duration={0.8}>
            <h2 className="text-[#d2d2d2] text-5xl md:text-7xl tracking-widest mb-16 text-center" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
              THE OPPORTUNITY
            </h2>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.2} duration={0.8}>
            <p className="text-white text-2xl text-center max-w-4xl mx-auto mb-8">
              Let kids go beyond passive viewing — let them interact, learn, and grow through AI-enhanced play.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.3} duration={0.8}>
            <p className="text-white text-2xl text-center mb-8">
              Imagine:
            </p>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedElement animation="slide-up" delay={0.4} duration={0.8}>
              <div className="flex justify-center items-center">
                <ul className="text-white text-xl space-y-4 list-disc list-inside text-center">
                  <li className="hover:text-[#f5b314] transition-colors duration-300">Reactions adjust based on the child's mood</li>
                  <li className="hover:text-[#f5b314] transition-colors duration-300">Environments change dynamically based on interactions</li>

                </ul>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={0.5} duration={0.8}>
              <div className="flex justify-center items-center">
                <ul className="text-white text-xl space-y-4 list-disc list-inside text-center">
                <li className="hover:text-[#f5b314] transition-colors duration-300">Characters greet your child by name</li>
                <li className="hover:text-[#f5b314] transition-colors duration-300">Seamless integration of lessons in math, empathy, and physical activity</li>
                </ul>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-20 snap-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <AnimatedElement animation="fade-in" duration={0.8}>
            <h2 className="text-[#d2d2d2] text-6xl md:text-7xl tracking-widest mb-16 text-center" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
              HOW IT WORKS?
            </h2>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedElement animation="slide-up" delay={0.1} duration={0.6}>
              <div className="bg-transparent backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Image 
                  src="/images/img_bot_1.png" alt="AI engine" 
                  width={143} 
                  height={143}
                  className="mx-auto mb-4 hover:rotate-12 transition-transform duration-300"
                />
                <p className="text-white text-xl text-center">
                  AI engine detects emotions, voice tone, & objects in the scene
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={0.2} duration={0.6}>
              <div className="bg-transparent backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Image 
                  src="/images/img_wavesound_1.png" alt="Voice output" 
                  width={140} 
                  height={140}
                  className="mx-auto mb-4 hover:rotate-12 transition-transform duration-300"
                />
                <p className="text-white text-xl text-center">
                  Voice output powered by AI cloning or professional recordings
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={0.3} duration={0.6}>
              <div className="bg-transparent backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Image 
                  src="/images/img_shopping_1.png" alt="Interaction" 
                  width={128} 
                  height={128}
                  className="mx-auto mb-4 hover:rotate-12 transition-transform duration-300"
                />
                <p className="text-white text-xl text-center">
                  Interaction happens via iPad/tablet with fully rigged, lip-synced 3D avatars
                </p>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={0.4} duration={0.6}>
              <div className="bg-transparent backdrop-blur-lg p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <Image 
                  src="/images/img_settings_1_1.png" alt="Parental control" 
                  width={128} 
                  height={128}
                  className="mx-auto mb-4 hover:rotate-12 transition-transform duration-300"
                />
                <p className="text-white text-xl text-center">
                  Parental dashboard for monitoring and customizing the experience
                </p>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Rest of the page content */}
      {/* Why Partner Now & What You Gain Sections Side by Side */}
      <section className="py-20 snap-section">
        <div className="container mx-auto px-4 sm:px-8 md:px-10">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* WHY PARTNER NOW */}
            <div className="flex-1">
              <AnimatedElement animation="fade-in" duration={0.8}>
              <h2 className="text-[#d2d2d2] text-6xl md:text-7xl tracking-widest mb-16 text-center" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
              WHY PARTNER?
                </h2>
              </AnimatedElement>
              <AnimatedElement animation="center" delay={0.2} duration={0.8}>
                <ul className="text-white text-xl space-y-4 list-disc pl-2 list-inside text-center">
                  <li>Rapid growth in AI-driven children's experiences</li>
                  <li>Families increasingly value purposeful screen time</li>
                  <li>The platform is designed for scalability across multiple character licenses</li>
                  <li>Launching with a globally loved character gives strong market entry</li>
                </ul>
              </AnimatedElement>
            </div>
            {/* WHAT YOU GAIN */}
            <div className="flex-1">
              <AnimatedElement animation="fade-in" duration={0.8}>
              <h2 className="text-[#d2d2d2] text-6xl md:text-7xl tracking-widest mb-16 text-center" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
              WHAT YOU GAIN?
                </h2>
              </AnimatedElement>
              <AnimatedElement animation="center" delay={0.2} duration={0.8}>
              <ul className="text-white text-xl space-y-4 list-disc pl-2 list-inside text-center">
              <li>Be among the first to enter AI-powered educational play</li>
                  <li>Generate revenue through licensing, subscriptions, and in-app features</li>
                  <li>Build deep parental trust with an educational-first approach</li>
                  <li>Access detailed reports on engagement, learning milestones, and more</li>
                </ul>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
      
      {/* The Future Is Shared Section */}
      <section className="py-20 snap-section">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <ScrollTriggeredAnimation animation="fade-in" duration={0.8}>
            <h2 className="text-[#d2d2d2] text-6xl md:text-7xl tracking-widest mb-16 text-center" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
              THE FUTURE IS SHARED
            </h2>
          </ScrollTriggeredAnimation>
          
          <AnimatedElement animation="fade-in" delay={0.2} duration={0.8}>
            <p className="text-white text-2xl text-center max-w-4xl mx-auto mb-16">
              Together, we can lead the next era of child-focused entertainment where play, learning, and emotional connection come to life through intelligent technology.
            </p>
          </AnimatedElement>
          
          <AnimatedElement animation="fade-in" delay={0.4} duration={0.8}>
            <div className="flex justify-center">
              <Link href="/partnership" passHref>
                <ContactButton className="rounded-full px-10 py-3 text-xl">
                  Join us
                </ContactButton>
              </Link>
            </div>
          </AnimatedElement>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}