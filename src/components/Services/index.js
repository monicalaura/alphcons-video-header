import React from 'react'
import services from './data';
import {ServicesWrapper,
        ServicesContainer,
        ServicesTitle,
        ServicesContent,
        ServicesIcon,       
        ServicesSubtitle,
        ServicesText } from './ServicesComponents'

//SERVICES component

const Services = () => {
    return (
        <>
          <ServicesWrapper id="services">
              <ServicesTitle>Our Services</ServicesTitle>
              <ServicesContainer>

               {services.map((service, serviceIndex) => {
                   const {id, icon, title, description} = service;
                   return <ServicesContent key={id}>
                   <ServicesIcon src={icon} />
                   <ServicesSubtitle>{title}</ServicesSubtitle>
                   <ServicesText>{description}</ServicesText>
               </ServicesContent>
})}
                                                           
                  </ServicesContainer>
          </ServicesWrapper>  
        </>
    )
}

export default Services
