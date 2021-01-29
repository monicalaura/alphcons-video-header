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
        email: '',
        password: ''
      };

const Login = (props) => {
    //the state of form fields
    const [state, setState] = useState(initalState);
    //the state of error message
    const [error, setError] = useState('');


    //useContext - switch to register form
    const { switchToRegister } = useContext(AccountContext);

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
        <FormWrapper onSubmit={handleSubmit} margin>
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
        <SubmitButton type="submit">Login</SubmitButton>
        <LinkMuted href='#' margin>Forgot password?</LinkMuted>
        <LinkMuted>Don't have an account? <LinkBold href="#" onClick={switchToRegister}> Register</LinkBold></LinkMuted>
        </FormWrapper>    
        </>     )
}

export default Login
