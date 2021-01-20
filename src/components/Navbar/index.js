import React from 'react'
import {FaBars} from 'react-icons/fa'
import siteLogo from './../../assets/logo.png'

import { Nav, 
    NavbarWrapper, 
    Logo, 
    MobileNavIcon, 
    MenuList, 
    MenuItem, 
    MenuLink,
    MenuBtn,
    MenuBtnLink } from './NavbarComponents'


//Main Navbar Component

const Navbar = ({toggleNav}) => {
    return (
        <>
          <Nav>
              <NavbarWrapper>
                  <Logo to='/'>
                       <img src={siteLogo} alt="Alphcons Logo"/>                          
                  </Logo>
                  <MobileNavIcon onClick ={toggleNav}>
                      <FaBars />
                  </MobileNavIcon>
                  <MenuList>
                  <MenuItem>
                            <MenuLink to ="home" 
                  /* here you customize the values of smooth scroll for each menu item  */
                            smooth={true}
                            spy={true}
                            duration={700}>
                                Home
                            </MenuLink> 
                      </MenuItem>
                      <MenuItem>
                            <MenuLink to ="e-marketing" 
                            smooth={true}
                            spy={true}
                            duration={700}>
                            Features
                            </MenuLink> 
                      </MenuItem>
                      <MenuItem>
                            <MenuLink to ="services"
                            smooth={true}
                            spy={true}
                            duration={700}>
                                Services
                            </MenuLink> 
                      </MenuItem>
                      <MenuItem>
                            <MenuLink to ="projects"
                            smooth={true}
                            spy={true}
                            duration={700}>
                                Projects
                            </MenuLink> 
                      </MenuItem>
                      <MenuItem>
                            <MenuLink to ="testimonials"
                            smooth={true}
                            spy={true}
                            duration={700}>
                                Testimonials
                            </MenuLink> 
                      </MenuItem>
                      <MenuItem>
                            <MenuLink to ="pricing"
                            smooth={true}
                            spy={true}
                            duration={700}>
                                Pricing
                            </MenuLink> 
                      </MenuItem>
                      <MenuItem>
                            <MenuLink to ="blog"
                            smooth={true}
                            spy={true}
                            duration={700}>
                                Blog
                            </MenuLink> 
                      </MenuItem>
                      <MenuItem>
                            <MenuLink to ="contact"
                            smooth={true}
                            spy={true}
                            duration={700}>
                                Contact
                            </MenuLink> 
                      </MenuItem>
                  </MenuList>
                  <MenuBtn>
                      <MenuBtnLink to='form'>Login</MenuBtnLink>
                  </MenuBtn>
              </NavbarWrapper> 
          </Nav>
        </>
    )
}

export default Navbar
