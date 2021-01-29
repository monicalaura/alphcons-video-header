import React, {useState} from 'react'
import HeroImg from './../../assets/hero.svg';
import { HeroStaticColumn, HeroStaticRow, HeroStaticWrapper, HeroStaticContainer, Subtitle, TextContainer, Title, TopText, StaticHeroBtn, HeroBtnContainer, ArrowDown, ArrowForward, ImgContainer, Image } from './HeroStaticComponents';


const HeroStatic = () => {
    // button hover state, toggle between ArrowDown and ArrowForward
    const [hover, setHover] = useState(false)

    //button toggle hover 
    const handleHover = () => {
      setHover(!hover)
    }

    return (
        
         <HeroStaticWrapper>
             <HeroStaticContainer>
             <HeroStaticRow>
                 <HeroStaticColumn>
                     <TextContainer>
                         <TopText>For any business</TopText>
                         <Title>Web solutions that fit your needs</Title>
                         <Subtitle>Web design, digital marketing and custom web applications</Subtitle>
                     </TextContainer>
                     <HeroBtnContainer>
                    <StaticHeroBtn to='e-marketing' 
                            onMouseEnter={handleHover} 
                            onMouseLeave={handleHover}
                  /*  here you customize the button props (see ButtonComponent)  */    
                            
                  /* here you customize the values of smooth scroll for button  */   
                            smooth={true} 
                            spy={true}
                            offset={-96} // the height of navbar in px
                            duration={700}>
                      {/* toggle between the 2 arrows */}
                       More info {hover ? <ArrowDown /> : <ArrowForward />} 
                    </StaticHeroBtn>
                    
                </HeroBtnContainer>
                 </HeroStaticColumn>
                 <HeroStaticColumn>
                     <ImgContainer>
                      <Image src={HeroImg}></Image>                     
                     </ImgContainer>
                 </HeroStaticColumn>
             </HeroStaticRow>
             </HeroStaticContainer> 
         </HeroStaticWrapper>   
        
    )
}

export default HeroStatic