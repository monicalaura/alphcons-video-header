import React from 'react'
import cards from './data';
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
    PricingContainer,
    IconEssential, 
    IconPremium, 
    IconTeam
} from './PricingComponents'

//PRICING component

const Pricing = () => {
    return (
        <>
    {/* IconContextProvider allows us to set custom values on the icons */}
      <PricingWrapper id="pricing">
       <PricingTitle>Pricing Plans</PricingTitle>
        <PricingContainer>
         {/*  map through the cards array */} 
        {cards.map((card) => {
                   const {id, icon, plan, cost, period, features} = card;
            return <PricingCard key={id}>
              <PricingInfo>
                <PricingIcon>

                  {/* conditionally render the react icons. You can modify them in PricingComponents */}
                    {icon ==='essential' && <IconEssential></IconEssential>}
                    {icon ==='premium' && <IconPremium></IconPremium>}
                    {icon ==='team' && <IconTeam></IconTeam>}  

                  </PricingIcon>
                  <PricingPlan>{plan}</PricingPlan>
                  <PricingCost>$ {cost}</PricingCost>
                  <PricingPeriod>{period}</PricingPeriod>
                  <PricingFeatures>
                    {/* map through the features subarray */}
                    {features.map((feature) => {
                      const {id, name} = feature;
                     return <PricingSingleFeature key={id}>{name}</PricingSingleFeature>
                    })}
                                       
                </PricingFeatures>
                <PricingBtn>Choose Plan</PricingBtn>
              </PricingInfo>
            </PricingCard>
              })}          

        </PricingContainer>
      </PricingWrapper>
  
        </>
    )
}

export default Pricing
