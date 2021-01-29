import styled from 'styled-components';

//General Form styled components

//inner form wrapper
export const FormWrapper = styled.form`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    margin-top: ${({margin}) => (margin ? '4rem' : '3rem')};
    padding-bottom:2rem;
`

//the light grey links 
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
export const SubmitButton = styled.button`
    display:flex;
    justify-content:center;
    width:90%;
    margin:0 auto;
    background:${(props) => props.theme.colors.darkGreen};
    color:${(props) => props.theme.colors.light};
    margin-top: ${({margin}) => (margin ? '2.7rem' : '1.7rem')};
    margin-bottom:1rem;
    padding:1.1rem 2.2rem;
    border-radius:${(props) => props.theme.radius.halfRound};
    font-size: ${(props) => props.theme.fontSizes.smaller};
    transition:${(props) => props.theme.transitions.inOut};
    border:none;
    outline:none;
    cursor:pointer;

    &:hover{
        background: ${(props) => props.theme.colors.midGreen};
        color:${(props) => props.theme.colors.dark};
    }

    @media screen and (max-width: 768px) {
        font-size: ${(props) => props.theme.fontSizes.smallest};
  }

    @media screen and (max-width:600px){
        padding:.8rem 1.3rem;
        
    }

`
//error div

export const Error = styled.div`
    width:90%;
    height:1.5rem;
    text-align:center;
    margin-top:1rem;
    color:${(props) => props.theme.colors.error};
    font-size: ${(props) => props.theme.fontSizes.small};

`
