import styled from 'styled-components';
import {FaUserAlt} from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BiMessageAltDetail} from "react-icons/bi";
import BckImg from '../../assets/contact.jpg'

//CONTACT component

//Contact section wrapper
export const ContactWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:5rem;
    padding-bottom:1rem;
    height:auto;
    position:relative;
    z-index:3;
    background: ${(props) => props.theme.colors.dark};
    background-image:url(${BckImg});
    background-repeat:no-repeat;
    background-size:cover;
    background-attachment:fixed;

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

    @media screen and (max-width:768px) {
        padding-top:3rem;
    }

`
// Contact form container
export const ContactContainer = styled.form`
    display:flex;
    flex-direction:column;
    width:50%;
    height:500px;
    position:relative;
    z-index:1;
    overflow:hidden;
    
    @media screen and (max-width:768px) {
        width:90%;
    }
`

//Contact section title
export const ContactTitle = styled.h1`
    color: ${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight:500;
    margin-bottom:4rem;
    z-index:1;

    @media screen and (max-width:480px) {
        font-size: ${(props) => props.theme.fontSizes.medium};
    }
`
//icon name
export const NameIcon = styled(FaUserAlt)`
 color: ${(props) => props.theme.colors.midGreen};
 font-size: ${(props) => props.theme.fontSizes.small};
`
//icon email
export const EmailIcon = styled(HiOutlineMail)`
 color: ${(props) => props.theme.colors.midGreen};
 font-size: ${(props) => props.theme.fontSizes.small};
`
//icon message
export const MessageIcon = styled(BiMessageAltDetail)`
 color: ${(props) => props.theme.colors.midGreen};
 font-size: ${(props) => props.theme.fontSizes.small};
`

//Contact form input
export const InputContact = styled.input`
    width:100%;
    height:3rem;
    outline:none;
    border: none;
    background:transparent;
    color:${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontSizes.small};
    border-bottom: 1px solid ${(props) => props.theme.colors.light};
    padding: 0.8rem;
    margin:0 auto;
    margin-top:.5rem;
    margin-bottom:1.5rem;
    transition:${(props) => props.theme.transitions.inOut};

    
    &:focus{
        border-bottom: 1px solid ${(props) => props.theme.colors.midGreen};
        outline:none;
    }

    &::placeholder{
        color: ${(props) => props.theme.colors.lightGrey}
    }

    &:focus::placeholder {
      color: transparent;
    }
        
`

//Contact form textarea
export const TextareaContact = styled.textarea`
    width:100%;
    height:auto;
    outline:none;
    border: none;
    background:transparent;
    color:${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontSizes.small};
    border-bottom: 1px solid ${(props) => props.theme.colors.light};
    padding: 0.8rem;
    margin:0 auto;
    margin-bottom:1rem;
    transition:${(props) => props.theme.transitions.inOut};

    
    &:focus{
        border-bottom: 1px solid ${(props) => props.theme.colors.midGreen};
        outline:none;
    }

    &::placeholder{
        color: ${(props) => props.theme.colors.lightGrey}
    }

    &:focus::placeholder {
      color: transparent;
    }

    `

//Contact Submit Button 
export const ContactButton = styled.button`
    display:flex;
    justify-content:center;
    margin:0 auto;
    width:60%;
    background:${(props) => props.theme.colors.darkGreen};
    color:${(props) => props.theme.colors.light};
    padding:1.1rem 2.2rem;
    font-size: ${(props) => props.theme.fontSizes.smaller};
    transition:${(props) => props.theme.transitions.inOut};
    border:none;
    outline:none;
    cursor:pointer;
    margin-top: ${({margin}) => (margin ? '2.7rem' : '1.7rem')};
    margin-bottom:1rem;
    border-radius:${(props) => props.theme.radius.halfRound};
    font-size: ${(props) => props.theme.fontSizes.smaller};
    
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