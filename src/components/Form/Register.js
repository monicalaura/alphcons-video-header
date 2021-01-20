import React, {useContext} from 'react'
import AccountContext from '../../AccountContext';
import {
    Input,
    SubmitButton,
    LinkMuted,
    LinkBold } from './FormComponents'


const Register = (props) => {
    const { switchToLogin } = useContext(AccountContext);

    return (
        <>
        <Input type="text" placeholder="Name" ></Input>
        <Input type="email" placeholder="Email" ></Input>
        <Input type="password" placeholder="Password"></Input>
        <SubmitButton primary>Submit</SubmitButton>
        <LinkMuted>Already have an account? <LinkBold href="#" onClick={switchToLogin}> Login</LinkBold></LinkMuted>
            
        </>     )
}

export default Register
