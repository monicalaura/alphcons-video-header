import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';

// Button component

export const Button = styled(LinkScroll)`
    border-radius:7px;
    background: ${({primary}) => (primary ? '#15b5ab' : '#18e0d3')};
    color: ${({primary}) => (primary ? '#ffffff' : '#020407')};
    padding: ${({large}) => (large ? '1.1rem 2.2rem' : '.6rem 1.3rem')};
    font-size: ${({bigFont}) => (bigFont ? '1.6rem' : '1.3rem')};
    display:flex;
    justify-content:center;
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
