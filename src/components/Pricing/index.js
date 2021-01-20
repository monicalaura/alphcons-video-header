import React from 'react'
import {RiSendPlane2Line} from 'react-icons/ri';
import { IoAirplaneOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { IconContext } from 'react-icons/lib';

import {
    PricingBtn,
    PricingCard,
    PricingCost,
    PricingFeatures,
    PricingIcon,
    PricingInfo,
    PricingPeriod,
    PricingPlan,
    PricingSingleFeature,
    PricingTitle,
    PricingWrapper,
    PricingContainer
} from './PricingComponents'

//PRICING component

const Pricing = () => {
    return (
        <>
    {/* IconContextProvider allows us to set custom values on the icons */}
    <IconContext.Provider value={{ color: "#FFFFFF", size: 60 }}>
      <PricingWrapper id="pricing">
       <PricingTitle>Pricing Plans</PricingTitle>
        <PricingContainer>        
            <PricingCard to='/sign-up'>
              <PricingInfo>
                <PricingIcon>
                  <RiSendPlane2Line />
                </PricingIcon>
                <PricingPlan>Essential</PricingPlan>
                <PricingCost>$ 20</PricingCost>
                <PricingPeriod>per month</PricingPeriod>
                <PricingFeatures>
                  <PricingSingleFeature>100 Lectus Est</PricingSingleFeature>
                  <PricingSingleFeature>Semper quam</PricingSingleFeature>
                  <PricingSingleFeature>Magna enim eget</PricingSingleFeature>
                </PricingFeatures>
                <PricingBtn primary>Choose Plan</PricingBtn>
              </PricingInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingInfo>
                <PricingIcon>
                  <IoAirplaneOutline />
                </PricingIcon>
                <PricingPlan>Premium</PricingPlan>
                <PricingCost>$ 250</PricingCost>
                <PricingPeriod>per month</PricingPeriod>
                <PricingFeatures>
                  <PricingSingleFeature>500 Lectus Est</PricingSingleFeature>
                  <PricingSingleFeature>Qui condimentum</PricingSingleFeature>
                  <PricingSingleFeature>Magna enim eget</PricingSingleFeature>
                </PricingFeatures>
                <PricingBtn primary>Choose Plan</PricingBtn>
              </PricingInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingInfo>
                <PricingIcon>
                  <IoRocketOutline />
                </PricingIcon>
                <PricingPlan>Team</PricingPlan>
                <PricingCost>$ 800</PricingCost>
                <PricingPeriod>per month</PricingPeriod>
                <PricingFeatures>
                  <PricingSingleFeature>Unlimited Placerat</PricingSingleFeature>
                  <PricingSingleFeature>Unlimited Lectus Est</PricingSingleFeature>
                  <PricingSingleFeature>24/7 Support</PricingSingleFeature>
                </PricingFeatures>
                <PricingBtn primary>Choose Plan</PricingBtn>
              </PricingInfo>
            </PricingCard>
        </PricingContainer>
      </PricingWrapper>
    </IconContext.Provider>  
        </>
    )
}

export default Pricing
