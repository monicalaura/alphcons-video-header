import React, {useState, useContext} from 'react'
import AccountContext from '../../AccountContext';
import {
    FormWrapper,
    Input,
    Error,
    SubmitButton,
    LinkMuted,
    LinkBold } from './FormComponents'

    //initial state of form fields
    const initalState = {
        username: '',
        email: '',
        password: ''
      };



const Register = (props) => {

    //the state of form fields
    const [state, setState] = useState(initalState);
    //the state of error message
    const [error, setError] = useState('');
    
    //useContext - switch to login form
    const { switchToLogin } = useContext(AccountContext);

    //handle submit
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

  //handle input
  const handleInput = e => {
    const inputName = e.currentTarget.name;
    const value = e.currentTarget.value;

    setState(prev => ({ ...prev, [inputName]: value }));
  };


    return (
        <>
        <FormWrapper onSubmit={handleSubmit}>
        <Input type="text" 
               name="username"
               placeholder="Name"
               value={state.username}
               onChange={handleInput}
                ></Input>
         <Input type="email" 
               name="email"
               placeholder="Email"
               value={state.email}
               onChange={handleInput}
                ></Input>
        <Input type="password" 
               name="password"
               placeholder="Password"
               value={state.password}
               onChange={handleInput}></Input>
               { 
               error && (
            <Error>
              {error}
            </Error>
          )}       
        <SubmitButton primary>Submit</SubmitButton>
        <LinkMuted>Already have an account? <LinkBold href="#" onClick={switchToLogin}> Login</LinkBold></LinkMuted>
        </FormWrapper>   
        </>     )
}

export default Register
