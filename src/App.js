import React, { Suspense, lazy } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ThreeBackground from './components/ThreeBackground';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Showreel = lazy(() => import('./components/Showreel'));
const ProjectGallery = lazy(() => import('./components/ProjectGallery'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="App">
      <ThreeBackground />
      <Header />
      <Hero />
      <Suspense fallback={<div className="loading-section">Loading...</div>}>
        <About />
        <Showreel />
        <ProjectGallery />
        <Skills />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;