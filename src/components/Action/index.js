import React from 'react'
import {ActionWrapper, ActionTitle, ActionDescription, ActionBtn} from './ActionComponents'

const Action = () => {
    return (
        <>
         <ActionWrapper id="action">
             <ActionTitle>Become a part of Alphcons community</ActionTitle>
             <ActionDescription>Lectus est semper quam, nec accumsan magna enim eget dui.</ActionDescription>
             <ActionBtn primary>Get Started</ActionBtn> 
         </ActionWrapper>   
        </>
    )
}

export default Action
