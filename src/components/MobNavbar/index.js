import React from 'react'
import { 
    MobNavbarWrapper, 
    CloseIcon,
    MobNavbarIcon,
    MobNavContainer,
    MobNavMenu,
    MobNavLink,
    MobMenuBtn,
    MobMenuBtnLink
              } from './MobNavbarComponents';

//Responsive navbar             

const MobNavbar = ({isOpen, toggleNav}) => {
    return (
        <MobNavbarWrapper isOpen={isOpen} onClick={toggleNav}>
            <MobNavbarIcon onClick={toggleNav}>
                <CloseIcon />
            </MobNavbarIcon>
            <MobNavContainer>
                <MobNavMenu>
                <MobNavLink to="home" onClick={toggleNav}
                /* here you customize the values of smooth scroll for each menu item  */
                 smooth={true}
                 spy={true}
                 duration={700}>
                      Home
                    </MobNavLink>
                    <MobNavLink to="e-marketing" onClick={toggleNav}
                     smooth={true}
                     spy={true}
                     duration={700}>
                      Features
                    </MobNavLink>
                    <MobNavLink to="services" onClick={toggleNav}
                    smooth={true}
                    spy={true}
                    duration={700}>
                      Services
                    </MobNavLink>
                    <MobNavLink to="projects" onClick={toggleNav}
                    smooth={true}
                    spy={true}
                    duration={700}>
                      Projects
                    </MobNavLink>
                    <MobNavLink to="testimonials" onClick={toggleNav}
                    smooth={true}
                    spy={true}
                    duration={700}>
                      Testimonials
                    </MobNavLink>
                    <MobNavLink to="pricing" onClick={toggleNav}
                    smooth={true}
                    spy={true}
                    duration={700}>
                      Pricing
                    </MobNavLink>
                    <MobNavLink to="blog" onClick={toggleNav}
                    smooth={true}
                    spy={true}
                    duration={700}>
                      Blog
                    </MobNavLink>
                    <MobNavLink to="contact" onClick={toggleNav}
                    smooth={true}
                    spy={true}
                    duration={700}>
                      Contact
                    </MobNavLink>
                    <MobMenuBtn>
                      <MobMenuBtnLink to='form'>Login</MobMenuBtnLink>
                  </MobMenuBtn>
                </MobNavMenu>
            </MobNavContainer>
        </MobNavbarWrapper>
    )
}

export default MobNavbar
