import React, {useState, useContext} from 'react';
import HeroContext from '../../HeroContext';
import Video from './../../assets/video-hero.mp4';
import { HeroWrapper,
         HeroBcg, 
         HeroVideo,
         HeroInfo,
         HeroTagline,
         HeroText,
         HeroBtn,
         HeroBtnContainer,
         ToggleHeroBtn,
         ArrowDown,
         ArrowForward, 
         ToggleHeroBtnContainer} from './HeroComponents';


//HERO component

const Hero = () => {
    // button hover state, toggle between ArrowDown and ArrowForward
    const [hover, setHover] = useState(false)
    

    //button toggle hover 
    const handleHover = () => {
      setHover(!hover)
    }

    //useContext - switch to the other two heros
    const { switchToStaticHero, switchToAnimatedHero } = useContext(HeroContext);

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
                    <HeroBtn to='features' 
                            onMouseEnter={handleHover} 
                            onMouseLeave={handleHover}
                  
                  /* here you customize the values of smooth scroll for button  */   
                            smooth={true} 
                            spy={true}
                            offset={-96} // the height of navbar in px
                            duration={700}>
                      {/* toggle between the 2 arrows */}
                       More info {hover ? <ArrowDown /> : <ArrowForward />} 
                    </HeroBtn>
                </HeroBtnContainer>
                {/* delete the ToggleHeroBtnContainer code if you don't want to switch heros buttons */}
                <ToggleHeroBtnContainer>
                    <ToggleHeroBtn onClick={switchToStaticHero}>Static Hero</ToggleHeroBtn>
                    <ToggleHeroBtn onClick={switchToAnimatedHero}>Animated Hero</ToggleHeroBtn>
                </ToggleHeroBtnContainer> 
            </HeroInfo>
        </HeroWrapper>
    )
}

export default Hero
