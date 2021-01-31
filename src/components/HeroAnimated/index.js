import React, {useState, useContext} from 'react';
import HeroContext from '../../HeroContext';
import { HeroAnimWrapper,
         HeroAnimInfo,
         HeroAnimTagline,
         HeroAnimText,
         AnimatedHeroBtn,
         HeroAnimBtnContainer,
         ArrowDown,
         ArrowForward } from './HeroAnimatedComponents';

 import {ToggleHeroBtnContainer, ToggleHeroBtn } from '../../components/Hero/HeroComponents';       


const HeroAnimAnimated = () => {
  // button hover state, toggle between ArrowDown and ArrowForward
  const [hover, setHover] = useState(false)

  //button toggle hover 
  const handleHover = () => {
    setHover(!hover)
  }

  //useContext - switch to the other two heros
  const { switchToVideoHero, switchToStaticHero } = useContext(HeroContext);


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
                  <AnimatedHeroBtn to='e-marketing' 
                          onMouseEnter={handleHover} 
                          onMouseLeave={handleHover}
                
                /* here you customize the values of smooth scroll for button  */   
                          smooth={true} 
                          spy={true}
                          offset={-96} // the height of navbar in px
                          duration={700}>
                    {/* toggle between the 2 arrows */}
                     More info {hover ? <ArrowDown /> : <ArrowForward />} 
                  </AnimatedHeroBtn>
              </HeroAnimBtnContainer>
              {/* delete the ToggleHeroBtnContainer code if you don't want to switch heros buttons */}
              <ToggleHeroBtnContainer>
                    <ToggleHeroBtn onClick={switchToVideoHero}>Video Hero</ToggleHeroBtn>
                    <ToggleHeroBtn onClick={switchToStaticHero}>Static Hero</ToggleHeroBtn>
              </ToggleHeroBtnContainer> 
          </HeroAnimInfo>
      </HeroAnimWrapper>
  )
}
export default HeroAnimAnimated
