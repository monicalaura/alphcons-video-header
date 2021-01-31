import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import MobNavbar from '../components/MobNavbar'
import Hero from '../components/Hero';
import HeroStatic from '../components/HeroStatic';
import HeroAnimated from '../components/HeroAnimated';
import Features from '../components/Features';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Action from '../components/Action';
import Testimonials from '../components/Testimonials';
import  Pricing  from '../components/Pricing';
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import  Footer  from '../components/Footer';
import HeroContext from '../HeroContext';

//page that renders all the components

const Home = () => {   
    //mobile navbar state
  const [isOpen, setIsOpen] = useState(false)
  //state that handles the toggle between the 3 types of hero. Video hero is active by default
  const [active, setActive] = useState("video");
     

  //toggle navbar
  const toggleNav = ()  => {
      setIsOpen(!isOpen)
  }

  //set the active state to static hero value
  const switchToStaticHero = () => {
    
        setActive("static") 
  }

 //set the active state to static hero value
 const switchToAnimatedHero = () => {
    
  setActive("animated")

}

//set the active state to video hero value
const switchToVideoHero = () => {
    
  setActive("video")

}

const contextValue = {switchToVideoHero, switchToStaticHero, switchToAnimatedHero }

    
   
    return (
      <HeroContext.Provider value={contextValue}>
        <>       
      <Navbar toggleNav ={toggleNav} />
      <MobNavbar isOpen={isOpen} toggleNav ={toggleNav} />

      {/* toggle between the 3 hero types */}
      {active === "video" && 
      <Hero />  } 
      {active === "static" && 
      <HeroStatic /> }
      {active === "animated" && 
      <HeroAnimated /> }              
        
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
        </HeroContext.Provider>
    )
}

export default Home
