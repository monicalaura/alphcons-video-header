import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import MobNavbar from '../components/MobNavbar'
import Hero from '../components/Hero';
//import HeroStatic from '../components/HeroStatic';
//import HeroAnimated from '../components/HeroAnimated';
import FeaturesData from '../components/FeaturesData';
import { FeaturesDataOne, FeaturesDataTwo, FeaturesDataThree } from '../components/FeaturesData/Data';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Action from '../components/Action';
import Testimonials from '../components/Testimonials';
import  Pricing  from '../components/Pricing';
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import  Footer  from '../components/Footer';

//page that centralizes all components

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
      {/* Spread out the objects from Data.js */}
      <FeaturesData {...FeaturesDataOne} /> 
      <FeaturesData {...FeaturesDataTwo} /> 
      <FeaturesData {...FeaturesDataThree} /> 
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
