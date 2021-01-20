import styled from 'styled-components';
import { MdArrowDownward, MdArrowForward } from "react-icons/md";
import BckImg from '../../assets/hero-anim.png'
import {motion} from 'framer-motion';

//HeroAnim ANIMATED styled components

//HeroAnim wrapper
export const HeroAnimWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0 2.5rem;
    height:600px;
    z-index:3;
    position:relative;
    background: ${(props) => props.theme.colors.dark};
    background-image:url(${BckImg});
    background-repeat:no-repeat;
    background-size:cover;
    //background-attachment:fixed;

    //background overlay
    :before{
        content:'';
        position:absolute;
        background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.5) 0%, transparent 100%);
        top:0;
        left:0;
        right:0;
        bottom:0;
    
    }

    `

    
//HeroAnim text container
export const HeroAnimInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:1300px;
    position:absolute;
    padding:0.6rem 2rem;
    z-index:3;
`

//HeroAnim title
export const HeroAnimTagline = styled(motion.h1)`
    color:  ${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontSizes.title};
    text-align:center;

    @media screen and (max-width: 768px){
        font-size: ${(props) => props.theme.fontSizes.large};
    }

    @media screen and (max-width: 480px){
        font-size: ${(props) => props.theme.fontSizes.medium};
    }
`
//HeroAnim description text
export const HeroAnimText = styled(motion.p)`
    color:  ${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin-top:2rem;
    text-align:center;
    max-width:700px;


    @media screen and (max-width: 600px){
        font-size: ${(props) => props.theme.fontSizes.small};
    }
   
`

//more info button
export const HeroAnimBtnContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:2.5rem;

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
    margin-top:0.3rem;

`