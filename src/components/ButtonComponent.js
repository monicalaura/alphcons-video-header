import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';

// Button component

export const Button = styled(LinkScroll)`
    border-radius:7px;
    //if the button has the 'primary' property, its background color is'#15b5ab'
    background: ${({primary}) => (primary ? '#15b5ab' : '#18e0d3')};
    //if the button has the 'primary' property, its text color is '#ffffff'
    color: ${({primary}) => (primary ? '#ffffff' : '#020407')};
    //if the button has the 'large' property, its padding is '1.1rem 2.2rem''
    padding: ${({large}) => (large ? '1.1rem 2.2rem' : '.6rem 1.3rem')};
    //if the button has 'bigFont' propery, its font size is '1.6rem'
    font-size: ${({bigFont}) => (bigFont ? '1.6rem' : '1.3rem')};
    display:flex;
    justify-content:center;
    //if the button has 'start' propery, it aligns at the beginning of the content
    align-items:${({start}) => (start ? 'flex-start' : 'center')};
    transition: all 0.4s ease-in-out;
    border:none;
    outline:none;
    cursor:pointer;

    &:hover{
        background: ${({primary}) => (primary ? '#18e0d3' : '#119e94')}; 
        color: #21252b;
    }

    @media screen and (max-width: 768px) {
    font-size:1.1rem
  }

    @media screen and (max-width:600px){
        padding:.8rem 1.3rem;
        
    }

`
