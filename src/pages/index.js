import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import MobNavbar from '../components/MobNavbar'
import Hero from '../components/Hero';
//import HeroStatic from '../components/HeroStatic';
//import HeroAnimated from '../components/HeroAnimated';
import Features from '../components/Features';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Action from '../components/Action';
import Testimonials from '../components/Testimonials';
import  Pricing  from '../components/Pricing';
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import  Footer  from '../components/Footer';

//page that renders all the components

const Home = () => {   
    //mobile navbar state
  const [isOpen, setIsOpen] = useState(false)

  //toggle navbar
  const toggleNav = ()  => {
      setIsOpen(!isOpen)
  }
    
    return (
        <>
      <Navbar toggleNav ={toggleNav} />
      <MobNavbar isOpen={isOpen} toggleNav ={toggleNav} /> 
       <Hero />  
      {/* <HeroStatic /> */} 
      {/* <HeroAnimated /> */}
      <Features />
      <Services />
      <Projects />
      <Action />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
        </>
    )
}

export default Home
