import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadApp from './DownloadApp';
import AppNotification from './AppNotification';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Replace these with your actual file paths
const videoPath = "/videos/main_video.mp4";
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image7.jpg",
  "/images/image8.jpg",
  "/images/image9.jpg",
  "/images/image10.jpg",
  "/images/image11.jpg",
  "/images/image12.jpg",
  "/images/image13.jpg",
  "/images/image14.jpg",
  "/images/image15.jpg",
  "/images/image16.jpg",
  "/images/image17.jpg",
  "/images/image18.jpg",
];

function Home() {
  const videoRef = useRef(null);
  const heroSectionRef = useRef(null);
  const logoRef = useRef(null);
  const contentRef = useRef(null);
  const overlayRef = useRef(null);
  const maskRef = useRef(null);
  const textRevealRef = useRef(null);
  
  // Set up GTA6-style scroll animations
  useEffect(() => {
    // Safe video play handling
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Playback prevented:", error);
        });
      }
    }
    
    // Create the main scroll timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroSectionRef.current,
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: 1,
      }
    });
    
    // Initial fade out of logo and content
    tl.to(logoRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.5
    }, 0);
    
    tl.to(contentRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5
    }, 0);
    
    // Zoom out effect on video
    tl.to(videoRef.current, {
      scale: 0.8,
      opacity: 0.6,
      duration: 1
    }, 0.5);
    
    // Reveal the logo mask
    tl.fromTo(maskRef.current, 
      { clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" },
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1.5 },
      1
    );
    
    // Fade in text with gradient effect
    tl.to(textRevealRef.current, {
      opacity: 1,
      y: 0,
      duration: 1
    }, 2);
    
    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, []);
  
  // Set up intersection observers for other animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="home-container">
      <AppNotification />
      {/* GTA6-style Hero Section */}
      <section ref={heroSectionRef} className="hero-section">
        {/* Background video */}
        <video 
          ref={videoRef}
          className="hero-video" 
          muted 
          loop 
          playsInline
        >
          <source src={videoPath} type="video/mp4" />
        </video>
        
        {/* Logo that will fade out */}
        <div ref={logoRef} className="hero-logo">
          <h1>VIT</h1>
        </div>
        
        {/* Initial content that will fade out */}
        <div ref={contentRef} className="hero-content">
          <h2 className="hero-subtitle">Question Paper Repository</h2>
          <p>Prepare smarter, score higher</p>
          <div className="hero-buttons">
            <Link to="/gallery" className="hero-btn primary">Browse Papers</Link>
            <Link to="/quiz" className="hero-btn secondary">Take a Quiz</Link>
          </div>
        </div>
        
        {/* Logo mask that will reveal */}
        <div ref={overlayRef} className="hero-overlay">
          <div ref={maskRef} className="logo-mask">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <mask id="logo-mask">
                  <rect width="100%" height="100%" fill="white" />
                  <path d="M20,20 L80,20 L80,80 L20,80 Z" fill="black" />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="#111" mask="url(#logo-mask)" />
            </svg>
          </div>
        </div>
        
        {/* Text that will reveal through the mask */}
        <div ref={textRevealRef} className="reveal-text">
          <h2>VIT QUESTION PAPERS</h2>
          <p>Your key to academic success</p>
        </div>
        
        {/* Scroll indicator */}
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>
      
      {/* Features Section with staggered animations */}
      <section className="features-section animate-section">
        <h2 className="section-title">Why Use Our Platform?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📝</div>
            <h3>Past Papers</h3>
            <p>Access question papers from previous years</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Practice NPTEL Quizzes</h3>
            <p>Test your knowledge with our quizzes</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Discussions</h3>
            <p>Discuss questions with other students</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Mobile App</h3>
            <p>Study on the go with our mobile app</p>
          </div>
        </div>
      </section>
      
      {/* Image Gallery with GTA6-style hover effects */}
      <section className="gallery-section animate-section">
        <h2 className="section-title">Vellore Instiute of Technology Chennai</h2>
        <div className="gallery-grid">
          {images.slice(0, 6).map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={image} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      
      {/* Parallax Image Section */}
      <section className="parallax-section" style={{ backgroundImage: `url(${images[6]})` }}>
        <div className="parallax-content">
          <h2>Ace Your Exams</h2>
          <p>Join thousands of students who improved their grades</p>
        </div>
      </section>
      
      {/* Testimonials with cinematic fade */}
      <section className="testimonials-section animate-section">
        <div className="testimonial-background" style={{ backgroundImage: `url(${images[7]})` }}></div>
        <div className="testimonial-overlay"></div>
        <div className="testimonial-content">
          <h2 className="section-title">What Students Say</h2>
          <div className="testimonial-card">
            <p>"This repository helped me score 95% in my exams. The past papers were exactly what I needed!"</p>
            <div className="testimonial-author">- Mudit Jain, CSE '25</div>
          </div>
        </div>
      </section>
      
      {/* Image Showcase with GTA6-style grid */}
      <section className="showcase-section animate-section">
        <h2 className="section-title">Campus</h2>
        <div className="showcase-grid">
          {images.slice(8, 18).map((image, index) => (
            <div 
              key={index} 
              className="showcase-item"
              style={{ 
                backgroundImage: `url(${image})`,
                animationDelay: `${index * 0.15}s`
              }}
            ></div>
          ))}
        </div>
      </section>
      
      {/* Stats Section with counter animation */}
      <section className="stats-section animate-section">
        <div className="stat-item">
          <span className="stat-number" data-count="500">50+</span>
          <span className="stat-label">Question Papers</span>
        </div>
        <div className="stat-item">
          <span className="stat-number" data-count="2000">2000+</span>
          <span className="stat-label">Students</span>
        </div>
        <div className="stat-item">
          <span className="stat-number" data-count="50">5+</span>
          <span className="stat-label">Core Subjects</span>
        </div>
      </section>
      
      {/* Download App Section */}
      <section className="download-section animate-section">
  <div className="download-section-content">
    <h2 className="section-title">Take VIT Papers Anywhere</h2>
    <p className="download-description">
      Access our complete collection of question papers on your mobile device. 
      Study anytime, anywhere - even without internet connection!
    </p>
    <div className="download-features">
      <div className="download-feature">
        <span className="feature-icon">📱</span>
        <span>Offline Access</span>
      </div>
      <div className="download-feature">
        <span className="feature-icon">🔔</span>
        <span>Exam Reminders</span>
      </div>
      <div className="download-feature">
        <span className="feature-icon">🔍</span>
        <span>Advanced Search</span>
      </div>
    </div>
  </div>
  <DownloadApp />
</section>
    </div>
  );
}

export default Home;
