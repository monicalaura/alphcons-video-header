import React, {useState} from 'react';
import {Error as ErrorMsg} from '../../components/Form/FormComponents'
import { ContactContainer,
         ContactWrapper,
         ContactTitle,
         InputContact,
         TextareaContact,
         ContactButton, 
         EmailIcon, 
         MessageIcon, 
         NameIcon } from './ContactComponents'

  //initial state of form fields
    const initalState = {
      username: '',
      email: '',
      message: ''
    };

const Contact = () => {

  //the state of form fields
  const [state, setState] = useState(initalState);
  //the state of error message
  const [error, setError] = useState('');
  
  //handle submit for contact form
  const handleSubmit = e => {
      e.preventDefault();    
      for (let key in state) {
        if (state[key] === '') {
          //here you customize the error message
          setError(`You must provide the ${key}`)
          return
    }
  }
  setError('');
  
};

//handle input for contact form
const handleInput = e => {
  const inputName = e.currentTarget.name;
  const value = e.currentTarget.value;

  setState(prev => ({ ...prev, [inputName]: value }));
};

    return (
        <>
        <ContactWrapper id="contact">
           <ContactTitle>Get In Touch</ContactTitle> 
          <ContactContainer onSubmit={handleSubmit}>
          <NameIcon></NameIcon>
          <InputContact type="text" 
               name="username"
               placeholder="Name"
               value={state.username}
               onChange={handleInput}
                ></InputContact>  
          <EmailIcon></EmailIcon>
          <InputContact type="email" 
               name="email"
               placeholder="Email"
               value={state.email}
               onChange={handleInput}
                ></InputContact>
          <MessageIcon></MessageIcon>
          <TextareaContact type="text" 
              name="message"
              placeholder="Your Message"
              value={state.message}
              onChange={handleInput} 
              ></TextareaContact>
               { 
               error && (
            <ErrorMsg>
              {error}
            </ErrorMsg>
          )}       
            <ContactButton type="submit" primary = {true} margin = {true}>Send</ContactButton>
          </ContactContainer>  
        </ContactWrapper>
        </>
    )
}

export default Contact
