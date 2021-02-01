import styled from 'styled-components';
import BckImg from '../../assets/contact.jpg'
import { Button } from '../ButtonComponent'

//Action styled components

//Action section wrapper
export const ActionWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:4rem;
    padding-bottom:4rem;
    height:auto;
    z-index:3;
    background: ${(props) => props.theme.colors.dark};
    background-image:url(${BckImg});
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment:fixed;

    @media screen and (max-width:768px) {
        padding:3rem 1rem 0 1rem;
        
    }
    `
//Action container
export const ActionContainer = styled.div`
width:100%;
`

//Action tagline
export const ActionTitle = styled.h1`
color: ${(props) => props.theme.colors.light};
font-size: ${(props) => props.theme.fontSizes.large};
font-weight:500;
margin-top:2rem;
margin-bottom:1.5rem;

@media screen and (max-width:480px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
}
`
//Action description
    export const ActionDescription = styled.p`
    max-width: 800px;
    margin: 0 auto;
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
//Action button
export const ActionBtn = styled(Button)`
 padding: .7rem 1.5rem;
 margin-top:2rem;
 margin-bottom:1.5rem;
 
`
