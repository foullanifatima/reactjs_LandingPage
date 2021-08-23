import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';



function App() {
  return (
    <>
   <Header/>
   <HeroSection/>
   <About/>
   <Contact/>
   <Footer/>
   </>
  );
}

export default App;
