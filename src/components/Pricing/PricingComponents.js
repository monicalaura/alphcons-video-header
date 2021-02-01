import styled from 'styled-components';
import { Button } from '../ButtonComponent'
import {RiSendPlane2Line} from 'react-icons/ri';
import { IoAirplaneOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";

//PRICING styled components

//Pricing section wrapper
export const PricingWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:4rem;
    padding-bottom:4rem;
    height:auto;
    background: ${(props) => props.theme.colors.light };

    @media screen and (max-width:768px) {
        padding-top:3rem;
    }

`
//Pricing container
export const PricingContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    justify-content: center;
    grid-gap:4rem; 
    max-width:1300px;
    margin:0 auto;
    padding:0 4.2rem;

    @media screen and (max-width:1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        padding: 0 1.8rem;
        width:100%;
        
    }   

`
//Pricing section title
export const PricingTitle = styled.h1`
    color: ${(props) => props.theme.colors.dark};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight:500;
    margin-bottom:4rem;

    @media screen and (max-width:480px) {
        font-size: ${(props) => props.theme.fontSizes.medium};
    }
`
//Pricing card
export const PricingCard = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:auto;
    padding:1.5rem 2.5rem 2.5rem 2.5rem;
    background: ${(props) => props.theme.colors.dark };
    border-radius:${(props) => props.theme.radius.square};
    transition:${(props) => props.theme.transitions.inOut};
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    text-decoration: none;
    
    &:hover {
        transform: scale(1.05);
            }
`

//Pricing icons
export const IconEssential = styled(RiSendPlane2Line)`
  color: ${(props) => props.theme.colors.light };
  font-size:4rem;
`
export const IconPremium = styled(IoAirplaneOutline)`
  color: ${(props) => props.theme.colors.light };
  font-size:4rem;
`
export const IconTeam = styled(IoRocketOutline)`
color: ${(props) => props.theme.colors.light };
  font-size:4rem;
`

//Pricing card info
export const PricingInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  padding: 0 3rem 0 3rem;
  color: ${(props) => props.theme.colors.midGreen };

  &:hover {
        color: ${(props) => props.theme.colors.lightGreen };
    }

  @media screen and (max-width: 768px) {
    padding: 0 1rem 0 1rem;
  }
`

//Pricing icon
export const PricingIcon = styled.div`
  margin: 2rem 0;
`
//Pricing plan type
export const PricingPlan = styled.h3`
  margin-bottom: .2rem;
  font-size: ${(props) => props.theme.fontSizes.medium};
`
//Pricing plan cost
export const PricingCost = styled.h4`
 font-size: ${(props) => props.theme.fontSizes.large};
 
`
//Pricing plan period
export const PricingPeriod = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-bottom: 2rem;
`
//Pricing features list
export const PricingFeatures = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;  
  margin: 1.3rem 0 2.8rem;
  list-style: none;
  color: ${(props) => props.theme.colors.light };
`
//Pricing feature item
export const PricingSingleFeature = styled.li`
  margin-bottom: 1.8rem;
`
//Pricing button
export const PricingBtn = styled(Button)`
 padding: 1rem 1.4rem;
 margin-top:1.5rem;

 @media screen and (max-width:768px) {
  padding: 1rem 1.2rem;
 }

`