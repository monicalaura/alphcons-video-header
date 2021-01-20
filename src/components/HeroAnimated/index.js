import React, {useState} from 'react'
import {Button} from '../ButtonComponent';
import { HeroAnimWrapper,
         HeroAnimInfo,
         HeroAnimTagline,
         HeroAnimText,
         HeroAnimBtnContainer,
         ArrowDown,
         ArrowForward } from './HeroAnimatedComponents';



const HeroAnimAnimated = () => {
  // button hover state, toggle between ArrowDown and ArrowForward
  const [hover, setHover] = useState(false)

  //button toggle hover 
  const handleHover = () => {
    setHover(!hover)
  }

  return (
      <HeroAnimWrapper id="home">
          <HeroAnimInfo>
              {/* Here you customize the framer animation for the main tagline */}
              <HeroAnimTagline 
                 initial={{x: -1000}} 
                 animate={{x: 20}}
                 transition={{ type: "spring", duration: 0.5 }}>
                     Building web solutions that fit your needs
              </HeroAnimTagline>
              {/* Here you customize the framer animation for the description */}
              <HeroAnimText
              initial={{x: 1000}} 
              animate={{x: 20}}
              transition={{ type: "spring", duration: 0.5 }}>
                   Web design, digital marketing and custom web applications</HeroAnimText>
              <HeroAnimBtnContainer>
                  <Button to='e-marketing' 
                          onMouseEnter={handleHover} 
                          onMouseLeave={handleHover}
                /*  here you customize the button props (see ButtonComponent)  */    
                          primary large
                /* here you customize the values of smooth scroll for button  */   
                          smooth={true} 
                          spy={true}
                          offset={-96} // the height of navbar in px
                          duration={700}>
                    {/* toggle between the 2 arrows */}
                     More info {hover ? <ArrowDown /> : <ArrowForward />} 
                  </Button>
              </HeroAnimBtnContainer>
          </HeroAnimInfo>
      </HeroAnimWrapper>
  )
}
export default HeroAnimAnimated
