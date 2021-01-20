import styled from 'styled-components';

//Services styled components

//Services section wrapper
export const ServicesWrapper = styled.section`
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
//Services container
export const ServicesContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap:2.5rem; 
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
//Service card
export const ServicesContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    height:auto;
    padding:1.5rem 2.5rem 2.5rem 2.5rem;
    background: ${(props) => props.theme.colors.light };
    border-radius:${(props) => props.theme.radius.square};
    transition:${(props) => props.theme.transitions.inOut};
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);

    &:hover {
        transform: scale(1.1);
        background: ${(props) => props.theme.colors.lightGreen };
        cursor:pointer;
    }

`
//Services icon
export const ServicesIcon = styled.img`
    width:150px;
    height:150px;
    margin-bottom:0.4rem;    

`
//Services section title
export const ServicesTitle = styled.h1`
    color: ${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight:500;
    margin-bottom:4rem;

    @media screen and (max-width:480px) {
        font-size: ${(props) => props.theme.fontSizes.medium};
    }
`

//Services card title
export const ServicesSubtitle = styled.h2`
    color: ${(props) => props.theme.colors.dark};
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight:600;
    margin-bottom:1rem;

`
//Services card description paragraph
export const ServicesText = styled.p`
    color: ${(props) => props.theme.colors.dark};
    font-size: ${(props) => props.theme.fontSizes.smaller};
    font-weight:400;
    
`