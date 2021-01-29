import React from 'react'
import {Button} from '../ButtonComponent'
import features from './data';
import {
        FeaturesDataContainer,
        FeaturesDataRow,
        Col1,
        Col2,
        TextContainer,
        UpperText,
        Title,
        Description,
        BtnContainer,
        ImgContainer,
        Image, 
        FeaturesWrapper
                  } from './FeaturesComponents'

   //FEATURES component               

 //destructure the props from the objects defined in Data.js
const FeaturesData = () => {
    return (
            
         <FeaturesWrapper id='features'>
            {features.map((feature) => {
             const {id, upperText, title, description, imgFirst, image, alt, 
                lightBcg, lightTxt, darkTxt, btnLabel} = feature;
                
                 return <FeaturesDataContainer key={id} id={id} lightBcg={lightBcg}>
                  
                   <FeaturesDataRow imgFirst={imgFirst}>
                    <Col1>
                      <TextContainer>
                       <UpperText>{upperText}</UpperText>
                          <Title lightTxt={lightTxt}>{title}</Title>
                          <Description darkTxt={darkTxt}>{description}</Description>
                          <BtnContainer>
                              <Button to='home' 
                             /*  customize the button props, see ButtonComponent */
                              primary
                              dark 
                              /* customize the smooth scroll values */
                              smooth={true}
                              spy={true}
                              offset={-96} //- the height of navbar in px
                              duration={600} >{btnLabel}</Button>
                          </BtnContainer>                        
                  </TextContainer>
                 </Col1>
                 <Col2>
                  <ImgContainer>
                    <Image src={image} alt={alt} />
                  </ImgContainer>
                 </Col2>
             </FeaturesDataRow>                   
            </FeaturesDataContainer>     
            })} 
           </FeaturesWrapper>  
        
    )
}

export default FeaturesData
