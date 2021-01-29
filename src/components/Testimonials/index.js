import React, { useState, useEffect } from 'react';
import { TestimonialWrapper, TestimonialTitle, PersonQuote, PersonTitle, TestimonialContainer, TestimonialContent, PersonImage, PersonName, IconRight, IconLeft } from './TestimonialComponents';
import users from './data';

//TESTIMONIALS component

/* see the carousel info here: https://www.npmjs.com/package/pure-react-carousel */
 
const Testimonials = () => {
    //people array
    const [people, setPeople] = useState(users)
    //slide counter 
    const [index, setIndex] = useState(0)

    //useEffect will run in 2 cases: when state index changes and when people state changes
  useEffect(() => {

    const lastIndex = people.length - 1
    //if index is negative, we set it to the last peopleIndex => last index will become active
    if(index < 0) {   
      setIndex(lastIndex)
    }
    //if index is bigger than the people array, set it to initial value
    if(index > lastIndex) { 
      setIndex(0)
    }
   }, [index, people])

   //AUTOSLIDE
   useEffect(() => { 
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
   return () => clearInterval(slider)
 
  }, [index])
  

    return (
        <>
        <TestimonialWrapper id="testimonials">
            <TestimonialTitle>What Customers Say</TestimonialTitle> 
            <TestimonialContainer>
                
                {people.map((person, personIndex) => {

        const {id, image, name, title, quote} = person;

         //by default, the activeSlide is displayed
          if(personIndex === index){
            return <TestimonialContent activeSlide key={id}>
              <PersonImage src={image} alt={name}></PersonImage>
                <PersonName>{name}</PersonName>
                <PersonTitle>{title}</PersonTitle>
                <PersonQuote>{quote}</PersonQuote>
              
            </TestimonialContent> }
         //last slide, on the left side, in the non-visible area (translateX(-100%))
         if(personIndex === index-1 || (index === 0 && personIndex === people.length-1)){
            return <TestimonialContent lastSlide key={id}>
              <PersonImage src={image} alt={name}></PersonImage>
                <PersonName>{name}</PersonName>
                <PersonTitle>{title}</PersonTitle>
                <PersonQuote>{quote}</PersonQuote>
            </TestimonialContent> } 

            //next slide, on the right side, in the non-visible area (translateX(100%))
            return <TestimonialContent nextSlide key={id}>
              <PersonImage src={image} alt={name}></PersonImage>
                <PersonName>{name}</PersonName>
                <TestimonialTitle>{title}</TestimonialTitle>
                <PersonQuote>{quote}</PersonQuote>
            </TestimonialContent>
                    
                })}

{/* control the index state values through prev/next buttons */}
<IconLeft onClick={() => setIndex(index - 1)}></IconLeft>
    
    <IconRight onClick={() => setIndex(index + 1)}>
      </IconRight>
               
            </TestimonialContainer>
        </TestimonialWrapper>
            
        </>
    )
}

export default Testimonials
