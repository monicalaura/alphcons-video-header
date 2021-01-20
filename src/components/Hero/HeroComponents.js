import styled from 'styled-components';
import { MdArrowDownward, MdArrowForward } from "react-icons/md";

//HERO styled components

//hero wrapper
export const HeroWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 0  2.5rem;
    height: 700px;
    position:relative;
    background: ${(props) => props.theme.colors.midGrey };
    z-index:1;

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
        z-index:3;

    }

`
//background container
export const HeroBcg = styled.div`
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    width:100%;
    height:100%;
    overflow:hidden;
`
//hero video
export const HeroVideo = styled.video`
/* object-fit specifies how the contents of a replaced element should be scaled 
   relative to the box established by its used height and width. */
    -o-object-fit:cover;
    object-fit:cover;
    background: ${(props) => props.theme.colors.darkGray };
    width:100%;
    height:100%;

`
//hero text container
export const HeroInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    max-width:1300px;
    position:absolute;
    padding:0.6rem 2rem;
    z-index:3;
`

//hero title
export const HeroTagline = styled.h1`
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
//hero description text
export const HeroText = styled.p`
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
export const HeroBtnContainer = styled.div`
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