import React, {useState} from 'react'
import Video from './../../assets/video-hero.mp4';
import {Button} from '../ButtonComponent';
import { HeroWrapper,
         HeroBcg, 
         HeroVideo,
         HeroInfo,
         HeroTagline,
         HeroText,
         HeroBtnContainer,
         ArrowDown,
         ArrowForward } from './HeroComponents';


//HERO component

const Hero = () => {
    // button hover state, toggle between ArrowDown and ArrowForward
    const [hover, setHover] = useState(false)

    //button toggle hover 
    const handleHover = () => {
      setHover(!hover)
    }

    return (
        <HeroWrapper id="home">
            <HeroBcg>
                <HeroVideo autoPlay loop muted src = {Video} type='video/mp4'>
                </HeroVideo>
            </HeroBcg>
            <HeroInfo>
                <HeroTagline>Building web solutions that fit your needs</HeroTagline>
                <HeroText> Web design, digital marketing and custom web applications</HeroText>
                <HeroBtnContainer>
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
                </HeroBtnContainer>
            </HeroInfo>
        </HeroWrapper>
    )
}

export default Hero
