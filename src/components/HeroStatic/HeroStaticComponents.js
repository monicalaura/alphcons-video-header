import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';
import { MdArrowDownward, MdArrowForward } from "react-icons/md";
import BckImg from '../../assets/contact.jpg'


//hero wrapper
export const HeroStaticWrapper = styled.div`
  color: #fff;
  padding: 10rem 0;
    height:auto;
    position:relative;
    background: ${(props) => props.theme.colors.dark };
    background-image:url(${BckImg});
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment:fixed;
    z-index:3;

    //background overlay
    :before{
        content:'';
        position:absolute;
        background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.8) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%);
        top:0;
        left:0;
        right:0;
        bottom:0;
        }
`;

//Hero container
export const HeroStaticContainer = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: 1300px;  
  padding-right: 3.5rem;
  padding-left: 3.5rem;
  
  @media screen and (max-width: 990px) {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  }
`;

export const HeroStaticRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
  margin: 0 -1.3rem -1.3rem -1.3rem;
  z-index:1;
  @media screen and (max-width: 768px) {
      flex-direction:column;
  }
  
`;

export const HeroStaticColumn = styled.div`
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  margin-bottom: 1.3rem;
  padding-right: 1.3rem;
  padding-left: 1.3rem;
  z-index:1;
  
  @media screen and (max-width: 768px) {
    display: flex;
    /* specifies the initial size of the flex item, before any available space is distributed */  
    flex-basis: 100%;
    justify-content: center;
    flex-direction:column;  
    max-width: 100%;
    
  }
`;

export const TextContainer = styled.div`
  padding-top: 0;
  padding-bottom: 1rem;
  max-width: 570px;
  z-index:1;
  
  @media screen and (max-width: 768px) {
    padding-bottom: .7rem;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  max-width: 545px;
  //here you change the position of the image: if you want the image first, change to flex-start
  justify-content: flex-end;
  z-index:1;
`;

export const TopText = styled.div`
  font-size: ${(props) => props.theme.fontSizes.smaller };
  color: ${(props) => props.theme.colors.midGreen };
  text-transform:uppercase; 
  line-height: 1.4rem;
  font-weight: 600;
  letter-spacing: 1.4px;
  margin-bottom: 1.4rem;
  z-index:1;
`;

export const Image = styled.img`
  padding-right: 0;
  max-width: 100%;
  max-height: 500px;
  vertical-align: middle;
  display: inline-block;
  border: 0;
  @media screen and (max-width: 768px) {
    margin-top:4rem
  } 
  
`;

export const Title = styled.h1`
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.fontSizes.title};
  line-height: 1.1;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
  
`;

export const Subtitle = styled.p`
  max-width: 560px;
  margin-bottom: 3rem;
  font-size: ${(props) => props.theme.fontSizes.mediumLarge};
  color: ${(props) => props.theme.colors.light};
  line-height: 2.7rem;
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin-bottom: 1.5rem;
  }
  
`;

//hero btn
export const StaticHeroBtn = styled(LinkScroll)`
    display:flex;
    justify-content:center;
    margin:0 auto;
    background:${(props) => props.theme.colors.darkGreen};
    color:${(props) => props.theme.colors.light};
    margin-top: ${({margin}) => (margin ? '2.7rem' : '1.7rem')};
    margin-bottom:1rem;
    padding:1.1rem 2.2rem;
    border-radius:${(props) => props.theme.radius.halfRound};
    font-size: ${(props) => props.theme.fontSizes.small};
    transition:${(props) => props.theme.transitions.inOut};
    border:none;
    outline:none;
    cursor:pointer;

    &:hover{
        background: ${(props) => props.theme.colors.midGreen};
        color:${(props) => props.theme.colors.dark};
    }
`

//more info button container
export const HeroBtnContainer = styled.div` 
    max-width:15rem; 
    @media screen and (max-width: 768px) {
        align-items:center
    }   
`

//arrow down icon
export const ArrowDown = styled(MdArrowDownward)`
    font-size: ${(props) => props.theme.fontSizes.small};
    color:  ${(props) => props.theme.colors.light};
    margin-left: 0.5rem;
    margin-top:0.3rem;
`
//arrow forward icon
export const ArrowForward = styled(MdArrowForward)`
    font-size: ${(props) => props.theme.fontSizes.small};
    color:  ${(props) => props.theme.colors.light};
    margin-left: 0.5rem;
    margin-top:0.2rem;
`