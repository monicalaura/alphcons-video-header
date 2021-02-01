//Navbar Styled Components

import styled from 'styled-components';
import {Link as LinkRouter} from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';


//Nav 
export const Nav = styled.nav`
    background: ${(props) => props.theme.colors.dark };
    display:flex;
    justify-content:center;
    align-items:center;
    height: 6rem;
    font-size: ${(props) => props.theme.fontSizes.medium };
    top:0;
    position:sticky;
    z-index:10;

// small and medium screens
@media screen and (max-width:960px) {
    transition: ${(props) => props.theme.transitions.ease };
}
`
//Navbar Wrapper 
export const NavbarWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    height:6rem;
    max-width: 1300px;
    z-index:1;

    // small and medium screens
@media screen and (max-width:960px) {
    justify-content:center;
}

`
//customise the Link coming from react-router
export const Logo = styled(LinkRouter)`
    display:flex;
    justify-self:flex-start;
    align-items:center;
    padding:2rem 0;
    cursor:pointer;   
`

//responsive menu icon
export const MobileNavIcon = styled.div`
    display:none;

 @media screen and (max-width: 768px) {
     display:block;
     font-size:2rem;
     position:absolute;
     top:0;
     right:0;
     transform:translate(-100%, 60%);
     color:${(props) => props.theme.colors.midGreen };
     cursor:pointer;
     
 }
`
//list of menu items
export const MenuList = styled.ul`
    display:flex;
    align-items:center;
    text-align:center;
    margin-right:-1.8rem;
    list-style:none;

@media screen and (max-width:768px) {
    display:none;
}
`
//menu item
export const MenuItem = styled.li`
     height:6rem;

`
//menu item link
//we customize the link from react-scroll
export const MenuLink = styled(LinkScroll)`
     color: ${(props) => props.theme.colors.light};
     display:flex;
     align-items:center;
     font-size:1.2rem;
     height:100%;
     padding: 0 1rem;
     transition:${(props) => props.theme.transitions.inOut};
     text-decoration:none;
     cursor:pointer;

     &:active {
         border-bottom: ${(props) => props.theme.colors.midGreen }
        };
     &:hover {
        color: ${(props) => props.theme.colors.lightGreen}
        }
`
//login button
export const MenuBtn = styled.nav`
    display:flex;
    align-items:center;

    @media screen and (max-width:768px){
        display:none;
    }
`
//login button link
export const MenuBtnLink = styled(LinkRouter)`
    background: ${(props) => props.theme.colors.darkGreen };
    color: ${(props) => props.theme.colors.light};
    white-space:nowrap;
    padding: 0.5rem 1.4rem;
    font-size:1.2rem;
    border-radius:${(props) => props.theme.radius.square};
    outline:none;
    border:none;
    cursor:pointer;
    transition:${(props) => props.theme.transitions.inOut};
    text-decoration:none;

    &:hover {
        background: ${(props) => props.theme.colors.lightGreen };
        color: ${(props) => props.theme.colors.midGrey};
        }

`