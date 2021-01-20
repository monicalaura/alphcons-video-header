import React from 'react'
import Icon1 from '../../assets/ui-design.svg'
import Icon2 from '../../assets/seo.svg'
import Icon3 from '../../assets/collaboration-tools.svg'
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
                      <ServicesContent>
                          <ServicesIcon src={Icon1} />
                          <ServicesSubtitle>UI/UX Design</ServicesSubtitle>
                          <ServicesText>Praesent sit amet lorem nec leo porta malesuada. Aenean eu magna ut quam rhoncus pretium praesent sit amet lorem nec leo porta malesuada.
                          Phasellus vehicula ex eget nunc vehicula, et ultrices urna dignissim. Etiam tincidunt egestas nibh, sed commodo velit lacinia at.
                          </ServicesText>
                      </ServicesContent>
                      <ServicesContent>
                          <ServicesIcon src={Icon2} />
                          <ServicesSubtitle>SEO Analytics</ServicesSubtitle>
                          <ServicesText>Praesent sit amet lorem nec leo porta malesuada. Aenean eu magna ut quam rhoncus pretium praesent sit amet lorem nec leo porta malesuada.
                          Phasellus vehicula ex eget nunc vehicula, et ultrices urna dignissim. Etiam tincidunt egestas nibh, sed commodo velit lacinia at.
                          </ServicesText>
                      </ServicesContent>
                      <ServicesContent>
                          <ServicesIcon src={Icon3} />
                          <ServicesSubtitle>Collaboration Tools</ServicesSubtitle>
                          <ServicesText>Praesent sit amet lorem nec leo porta malesuada. Aenean eu magna ut quam rhoncus pretium praesent sit amet lorem nec leo porta malesuada.
                          Phasellus vehicula ex eget nunc vehicula, et ultrices urna dignissim. Etiam tincidunt egestas nibh, sed commodo velit lacinia at.
                          </ServicesText>
                      </ServicesContent>
                  </ServicesContainer>
          </ServicesWrapper>  
        </>
    )
}

export default Services
