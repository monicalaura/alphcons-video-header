import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

//Responsive navbar styled components

//mobile navbar wrapper
export const MobNavbarWrapper = styled.aside`
    position:fixed;
    width:100%;
    height:100%;
    background: ${(props) => props.theme.colors.dark };
    display:grid;
    align-items:center;
    left:0;
    transition:${(props) => props.theme.transitions.inOut};
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    z-index:999;

`
//fa close icon
export const CloseIcon = styled(FaTimes)`
    color: ${(props) => props.theme.colors.light};

`
//the container of the open icon
export const MobNavbarIcon = styled.div`
    position:absolute;
    top:1.3rem;
    right:1.6rem;
    font-size: ${(props) => props.theme.fontSizes.medium};
    background:transparent;
    outline:none;
    cursor:pointer;

`
//mobile navbar container
export const MobNavContainer = styled.div`
    color: ${(props) => props.theme.colors.light};
`

//div of mobile menu items
export const MobNavMenu = styled.div`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(3, 3rem);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows:repeat(3, 3rem);

    }
`
//links of mobile menu items
//we style the react-scroll link
export const MobNavLink = styled(LinkScroll)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.4rem;
    margin-top:1.1rem;
    transition:${(props) => props.theme.transitions.inOut};
    color: ${(props) => props.theme.colors.light};
    list-style:none;
    text-decoration:none;
    cursor:pointer;

    &:hover {
        color: ${(props) => props.theme.colors.lightGreen};
    }
`
//mobile menu login button
export const MobMenuBtn = styled.div`
    display:flex;
    justify-content:center;
    margin-top:2rem;
`
//the link of login button (router)
export const MobMenuBtnLink = styled(LinkRouter)`
    border-radius:${(props) => props.theme.radius.square};
    background: ${(props) => props.theme.colors.darkGreen };
    color: ${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontSizes.small};
    transition:${(props) => props.theme.transitions.inOut};
    padding: .6rem 1.3rem;
    white-space:nowrap;
    outline:none;
    border:none;
    text-decoration:none;
    cursor:pointer;

    &:hover {
        background: ${(props) => props.theme.colors.lightGreen };
        color: ${(props) => props.theme.colors.midGrey};
        

    }

`