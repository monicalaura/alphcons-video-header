import React from 'react'
import {Button} from '../ButtonComponent'
import {FeaturesDataWrapper,
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
        Image 
                  } from './FeaturesDataComponents'

   //FEATURES component               

 //destructure the props from the objects defined in Data.js
const FeaturesData = (
     {id, upperText, title, description, imgFirst, image, alt, lightBcg, lightTxt, darkTxt, btnLabel, primary}) => {
    return (
        <>
          <FeaturesDataWrapper id={id} lightBcg={lightBcg} >
            <FeaturesDataContainer>
                <FeaturesDataRow imgFirst={imgFirst}>
                    <Col1>
                     <TextContainer>
                         <UpperText>{upperText}</UpperText>
                             <Title lightTxt={lightTxt}>{title}</Title>
                             <Description darkTxt={darkTxt}>{description}</Description>
                             <BtnContainer>
                                 <Button to='home' 
                                /*  customize the button props, see ButtonComponent */
                                 primary={true}
                                 dark={false}
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
          </FeaturesDataWrapper>  
        </>
    )
}

export default FeaturesData
