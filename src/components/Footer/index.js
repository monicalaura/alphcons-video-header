import React from 'react';
import { Button } from '../ButtonComponent';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterWrapper,
  FooterNewsletter,
  FooterSubText,
  FooterSubHeading,
  FormNewsletter,
  NewsletterInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterScrollLink,
  SocialMedia,
  SocialMediaWrap,
  FooterLogo,
  Copyright,
  SocialIcons,
  SocialIconLink
} from './FooterComponents';


import siteLogo from './../../assets/logo.png'

//FOOTER component

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterNewsletter>
        <FooterSubHeading>
          Subscribe to our newsletter to receive the latest news and offerts
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <FormNewsletter>
          <NewsletterInput name='email' type='email' placeholder='Your Email' />
          <Button primary>Subscribe</Button>
        </FormNewsletter>
      </FooterNewsletter>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>            
            <FooterLink to='e-marketing'>Our Expertise</FooterLink>
            <FooterLink to='services'>Services</FooterLink>
            <FooterLink to='pricing'>Pricing</FooterLink>
            <FooterLink to='/form'>Login</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterScrollLink to='contact'
             smooth={true}
             spy={true}
             duration={700}>
               Contact
               </FooterScrollLink>
            <FooterLink to='/'>Link 2</FooterLink>
            <FooterLink to='/'>Link 3</FooterLink>
            <FooterLink to='/'>Link 4</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
        <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/'>Twitter</FooterLink>
            <FooterLink to='/'>Instagram</FooterLink>
            <FooterLink to='/'>Facebook</FooterLink>
            <FooterLink to='/'>Youtube</FooterLink>           
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Other Links</FooterLinkTitle>
            <FooterLink to='/'>Other Link 1</FooterLink>
            <FooterLink to='/'>Other Link 2</FooterLink>
            <FooterLink to='/'>Other Link 3</FooterLink>
            <FooterLink to='/'>Other Link 4</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
            <FooterLogo to='/'>
                       <img src={siteLogo} alt="Alphcons Logo"/>                          
            </FooterLogo>
          <Copyright>ALPHCONS © 2021</Copyright>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              rel='noopener noreferrer'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterWrapper>
  );
}

export default Footer;