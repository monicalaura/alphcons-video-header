import styled from 'styled-components';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

//TESTIMONIALS styled components

//Testimonials section wrapper
export const TestimonialWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding: 4rem 2rem 4rem 2rem;
    //width: 100vw;
    height:auto;
    background: ${(props) => props.theme.colors.dark};

    @media screen and (max-width:768px) {
        width:100%;
        padding-top:3rem;
    }

    `

//Testimonials section title
  export const TestimonialTitle = styled.h1`
    color: ${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight:500;
    margin-bottom:4rem;

    @media screen and (max-width:768px) {
        font-size: ${(props) => props.theme.fontSizes.medium};
    }
`

    export const TestimonialContainer = styled.div`
        margin: 0 auto;
        margin-top: 4rem;
        width: 80vw;
        height: 450px;
        max-width: 1200px;
        text-align: center;
        position: relative;
        display: flex;

        @media screen and (max-width:768px) {
        font-size: ${(props) => props.theme.fontSizes.medium};
        width: 100%;
    }   

    @media screen and (max-width:768px) {
        max-width:600px;
    } 

    @media screen and (max-width:480px) {
        max-width:400px;
    }     
    `

    //Testimonial item content
    export const TestimonialContent = styled.article`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: ${({activeSlide}) => (activeSlide ? '1' : '0')}; 
        transition:${(props) => props.theme.transitions.linear};
        //props that represent the position of each slide 
        transform: ${({nextSlide}) => (nextSlide && 'translateX(100%)')};
        transform: ${({lastSlide}) => (lastSlide && 'translateX(-100%)')};
        transform: ${({activeSlide}) => (activeSlide && 'translateX(0);')};
    `

    //Testimonials person image
    export const PersonImage = styled.img`
        border-radius:${(props) => props.theme.radius.round};
        margin-bottom: 1rem;
        width: 150px;
        height: 150px;
        object-fit: cover;
        border: 4px solid ${(props) => props.theme.colors.midGreen};
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `

    //Testimonials person name
    export const PersonName = styled.h4`
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.midGreen};
        margin-bottom: 0.25rem;
        font-size: ${(props) => props.theme.fontSizes.medium};

        @media screen and (max-width:768px) {
            font-size: ${(props) => props.theme.fontSizes.small}
        }
    `
    //Testimonials person title
    export const PersonTitle = styled.p`
        text-transform: capitalize;
        margin-bottom: 0.75rem;
        color: ${(props) => props.theme.colors.light};
        font-size: ${(props) => props.theme.fontSizes.small};

        @media screen and (max-width:768px) {
            font-size: ${(props) => props.theme.fontSizes.smaller}
        }
    `
    //Testimonials person quote
    export const PersonQuote = styled.p`
        max-width: 800px;
        margin: 0 auto;
        margin-top: 2rem;
        line-height: 2;
        color: ${(props) => props.theme.colors.lightGrey};
        font-size: ${(props) => props.theme.fontSizes.small};

        @media screen and (max-width:768px) {
            font-size: ${(props) => props.theme.fontSizes.smaller};
            max-width:400px;
      }

      @media screen and (max-width:480px) {
            max-width:200px;
      }
    `
    //Testimonials quote icon
    export const QuoteIcon = styled(FaQuoteRight)`
        font-size: 3rem;
        margin-top: 1rem;
        color: ${(props) => props.theme.colors.midGreen};
    `
   //Testimonials left navigation icon 
    export const IconLeft = styled(FiChevronLeft)`
        position: absolute;
        top: 200px;
        left:0;
        transform: translateY(-50%);
        background: ${(props) => props.theme.colors.darkGreen};
        color: ${(props) => props.theme.colors.light};
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;        
        display: grid;
        place-items: center;
        border-color: transparent;
        border-radius: ${(props) => props.theme.radius.square};
        cursor: pointer;
        transition: ${(props) => props.theme.transitions.inOut};

            &:hover{
                background: ${(props) => props.theme.colors.light};
                color: ${(props) => props.theme.colors.dark};
            }

            @media screen and(max-width:800px){
                width: 1.25rem;
                height: 1.25rem;
                font-size: 1rem;
            }
    `
    //Testimonials right navigation icon
    export const IconRight = styled(FiChevronRight)`
    position: absolute;
    top: 200px;
    right:0;
    transform: translateY(-50%);
    background: ${(props) => props.theme.colors.darkGreen};
    color: ${(props) => props.theme.colors.light};
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border-color: transparent;
    font-size: 1rem;
    border-radius: ${(props) => props.theme.radius.square};
    cursor: pointer;
    transition: ${(props) => props.theme.transitions.inOut};

    &:hover{
                background: ${(props) => props.theme.colors.light};
                color: ${(props) => props.theme.colors.dark};
            }

    @media screen and(max-width:800px){
                width: 1.25rem;
                height: 1.25rem;
                font-size: 1rem;
            }
`

