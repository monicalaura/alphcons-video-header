import styled from 'styled-components';
import {FaChevronRight} from 'react-icons/fa'

//Blog styled components

//Blog section wrapper
export const BlogWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:4rem;
    padding-bottom:4rem;
    height:auto;
    background: ${(props) => props.theme.colors.dark };

    @media screen and (max-width:768px) {
        padding-top:3rem;
    }

`
//Blog section title
export const BlogTitle = styled.h1`
    color: ${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight:500;
    margin-bottom:4rem;

    @media screen and (max-width:480px) {
        font-size: ${(props) => props.theme.fontSizes.medium};
    }
`
//Blog container
export const BlogContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap:4rem; 
    max-width:1300px;
    margin:0 auto;
    padding:0 4.2rem;

    @media screen and (max-width:1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        padding: 0 1.8rem
    }   

`
//Blog card
export const BlogContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    height:auto;
    background: ${(props) => props.theme.colors.light };
    border-radius:${(props) => props.theme.radius.square};
    transition:${(props) => props.theme.transitions.inOut};
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    &:hover {
        transform: scale(1.1);
        cursor:pointer;
    }

`
//blog image container
export const BlogImgContainer = styled.div`
width:100%;
height:300px;
background:${(props) => props.theme.colors.lightGreen };
border-radius:${(props) => props.theme.radius.square};
margin-bottom:2rem;
padding:3.5rem 1.5rem 0 1.5rem;

 
`
//Blog image
export const BlogImage = styled.img`
    width:350px;
    max-width: 100%;
    height: auto;
    margin:0 auto;
    
`

//the top part of Blog description
export const BlogTop = styled.div`
    display: flex;
    align-items:flex-start;
    width:85%;
`

//blog date container
export const BlogDateContainer = styled.div`
    width: 3.2rem;
    line-height:2;
    background: ${(props) => props.theme.colors.lightGreen };
    text-align: center;
    border-radius:${(props) => props.theme.radius.square};
    margin-right:.5rem;
   

`
//blog date items
export const BlogDateItems = styled.h5`
    background: ${({dark}) => (dark ? '#030404' : '#8bf0e9')};
    color: ${({dark}) => (dark ? '#ffffff' : '#030404')};
    font-size: ${(props) => props.theme.fontSizes.smallest};
    font-weight:400;
    text-transform:uppercase;
`
//blog top text container
export const BlogTopTextWrap = styled.div`
    margin-left:1rem;
    margin-top: .5rem;
    flex: 1 1;

`
//blog top text title
export const BlogTopTitle = styled.a`
    font-size: ${(props) => props.theme.fontSizes.medium};
    color: ${(props) => props.theme.colors.dark };
    font-weight:600;
    margin-bottom: .25rem;
`
//blog top text subtitle
export const BlogTopSubtitle = styled.p`
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.darkGrey };
    font-weight:400;
   
`

//blog top text paragraph
export const BlogDescription = styled.p`
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.lightGrey };
    font-weight:400;
    margin-top: .5rem; 
    width:85%;  
`
//read more container
export const BlogReadMoreWrap = styled.div`
    margin-top:.6rem;
    margin-bottom:2rem;

`
//read more link
export const BlogReadMoreLink = styled.a`
    font-size: ${(props) => props.theme.fontSizes.small};
    color: ${(props) => props.theme.colors.midGreen };
    font-weight:400;
    padding:2px 0;
    
`
//read more icon
export const BlogReadMoreIcon = styled(FaChevronRight)`
    font-size: ${(props) => props.theme.fontSizes.smallest};
    color: ${(props) => props.theme.colors.midGreen };
    font-weight:400;
    position: relative;
    top:1px;
    margin-left:.5rem;
   
    
    
`



