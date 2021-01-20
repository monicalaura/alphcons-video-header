import React from 'react'
import { ContactContainer,
         ContactWrapper,
         ContactTitle,
         InputContact,
         TextareaContact,
         ContactButton, 
         EmailIcon, 
         MessageIcon, 
         NameIcon } from './ContactComponents'

const Contact = () => {
    return (
        <>
        <ContactWrapper id="contact">
           <ContactTitle>Get In Touch</ContactTitle> 
          <ContactContainer>
          <NameIcon></NameIcon><InputContact type="text" placeholder="Your Name"></InputContact>  
          <EmailIcon></EmailIcon><InputContact type="email" placeholder="Your Email"></InputContact>
          <MessageIcon></MessageIcon><TextareaContact  placeholder="Your Message"></TextareaContact>
            <ContactButton primary margin>Send</ContactButton>
          </ContactContainer>  
        </ContactWrapper>
        </>
    )
}

export default Contact
