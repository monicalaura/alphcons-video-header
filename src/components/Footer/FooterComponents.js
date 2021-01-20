import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

//FOOTER styled components

//Footer wrapper
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background: ${(props) => props.theme.colors.dark };
  padding: 4rem 0 2rem 0;
  
`;

//Footer subscribe section
export const FooterNewsletter = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  color: ${(props) => props.theme.colors.light };
`;

//Footer subscribe big text
export const FooterSubHeading = styled.p`
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.fontSizes.mediumLarge};
`;

//Footer subscribe small text
export const FooterSubText = styled.p`
  margin-bottom: 2rem;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

//Footer subscribe form
export const FormNewsletter = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

//Footer subscribe input
export const NewsletterInput = styled.input`
  padding: .6rem 1.6rem;
  font-size: ${(props) => props.theme.fontSizes.small};
  border-radius:${(props) => props.theme.radius.square};
  margin-right: .8rem;
  outline: none;
  border: none;
  border: 1px solid ${(props) => props.theme.colors.light };

  &::placeholder {
    color: ${(props) => props.theme.colors.midGrey };;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

//Footer bottom links wrapper
export const FooterLinksWrapper = styled.div`
  display: flex;
  margin-bottom:4rem;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

//Footer bottom links container
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1400px;
  
  @media screen and (max-width: 820px) {
    padding-top: 2.5rem;
  }
`;

//Footer bottom links div
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1.4rem;
  text-align: left;
  width: 10rem;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.light };

  @media screen and (max-width: 420px) {
    margin: 0;
    width: 100%;
    padding: .8rem;
    
  }
`;

//Footer bottom links title
export const FooterLinkTitle = styled.h2`
  margin-bottom: 1.4rem;
  color: ${(props) => props.theme.colors.midGreen};
  font-weight:500
`;

//Footer bottom links 
export const FooterLink = styled(LinkRouter)`
  color: ${(props) => props.theme.colors.light };
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition:${(props) => props.theme.transitions.inOut};
  
  &:hover {
    color: ${(props) => props.theme.colors.midGreen };
    cursor:pointer;
    
  }
`;

//Footer bottom links scroll 
export const FooterScrollLink = styled(LinkScroll)`
  color: ${(props) => props.theme.colors.light };
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition:${(props) => props.theme.transitions.inOut};
  
  &:hover {
    color: ${(props) => props.theme.colors.midGreen };
    cursor:pointer;
    
  }
`;

export const SocialMedia = styled.section`
width:100%;
 border-top: 1px solid rgba(28,37,43,0.20);

`;


export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1400px;
  margin: 1.5rem auto 0 auto;
  

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLogo = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  
`;

export const Copyright = styled.small`
  color: ${(props) => props.theme.colors.light };

  @media screen and (max-width: 820px) {
    margin-top:1rem;
  }
 
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13rem;

  @media screen and (max-width: 820px) {
    margin-top:1rem;
  }
`;

export const SocialIconLink = styled.a`
  color: ${(props) => props.theme.colors.midGreen };
  font-size: ${(props) => props.theme.fontSizes.small};
`;