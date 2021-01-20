import styled from 'styled-components';
import {Button} from '../ButtonComponent'


//General Form styled components

export const LinkMuted = styled.a`
    color: ${(props) => props.theme.colors.mutedGrey};
    font-size: ${(props) => props.theme.fontSizes.smaller};
    font-weight:400;
    margin-top: ${({margin}) => (margin ? '1rem' : '.7rem')};
    text-align:center;
    text-decoration:none;
`
//Login and Register links
export const LinkBold = styled.a`
    color: ${(props) => props.theme.colors.darkGreen};
    font-size: ${(props) => props.theme.fontSizes.smaller};
    font-weight:500;
    text-decoration:none;
`
//Input
export const Input = styled.input`
    width:85%;
    height:3rem;
    outline:none;
    border: none;
    border-bottom: 1px solid ${(props) => props.theme.colors.darkGreen};
    padding: 0.8rem;
    margin:0 auto;
    margin-bottom:1rem;

    
    &:focus{
        border-bottom: 1px solid ${(props) => props.theme.colors.midGreen};
        outline:none;
    }

    &::placeholder{
        color: rgba(200,200,200, 1);
    }
        
`
//Submit Button 
export const SubmitButton = styled(Button)`
    width:90%;
    margin:0 auto;
    margin-top: ${({margin}) => (margin ? '2.7rem' : '1.7rem')};
    margin-bottom:1rem;
    border-radius:${(props) => props.theme.radius.halfRound};
    font-size: ${(props) => props.theme.fontSizes.smaller};

`