import React, {useContext} from 'react'
import AccountContext from '../../AccountContext';
import {
    Input,
    SubmitButton,
    LinkMuted,
    LinkBold } from './FormComponents'


const Login = (props) => {
    const { switchToRegister } = useContext(AccountContext);

    return (
        <>
        <Input type="email" placeholder="Email" ></Input>
        <Input type="password" placeholder="Password"></Input>
        <SubmitButton primary margin>Login</SubmitButton>
        <LinkMuted href='#' margin>Forgot password?</LinkMuted>
        <LinkMuted>Don't have an account? <LinkBold href="#" onClick={switchToRegister}> Register</LinkBold></LinkMuted>
            
        </>     )
}

export default Login
