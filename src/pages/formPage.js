import React, {useState} from 'react'
import {Link as LinkRouter} from 'react-router-dom';
import Login from '../components/Form/Login'
import Register from '../components/Form/Register'
import styled from 'styled-components';
import {motion} from 'framer-motion';
import AccountContext from '../AccountContext';

//see framer-motion here: https://github.com/framer/motion


//General Form page

// form page  styled components
export const FormPageContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:100%;
    padding-top:4rem;
    background: ${(props) => props.theme.colors.light };   
`
// form div container
export const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:320px;
    height:600px;
    position:relative;
    border-radius:${(props) => props.theme.radius.halfSquare};
    background: ${(props) => props.theme.colors.light };
    overflow:hidden;
    -webkit-box-shadow: 0px 10px 13px -9px #000000, 4px 4px 6px 4px rgba(2,4,7,0);; 
    box-shadow: 0px 10px 13px -9px #000000, 4px 4px 6px 4px rgba(2,4,7,0);
`

//the container of the top shape 
export const TopAnimWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    width:100%;
    height:240px;
    padding: 0 1.7rem;
    padding-bottom:4rem; 
    margin-bottom:1rem;   
`

// top animated shape (with framer-motion)
export const TopAnim = styled(motion.div)`
    display:flex;
    flex-direction:column;
    position:absolute;
    width:160%;
    height:535px;
    top:-310px;
    right:-70px;
    transform:rotate(60deg);
    border-radius:${(props) => props.theme.radius.round};
    background: ${(props) => props.theme.colors.darkGreen };

`

export const TopTextContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    margin-left:1rem;
    margin-top:-12rem;
    width:100%;
`

export const TopText = styled.h2`
    font-size: ${(props) => props.theme.fontSizes.medium};
    color:${(props) => props.theme.colors.light };
    font-weight:600;
    z-index:9;
`

//the 'Please login/register to continue' text
export const TopTextSmall = styled.p`
    color: ${(props) => props.theme.colors.light};
    font-size: ${(props) => props.theme.fontSizes.smaller};
    font-weight:400;
    margin-top:.8rem;
    z-index:9;
`
//Back Home link
export const TopTextLink = styled(LinkRouter)`
    color: ${(props) => props.theme.colors.lightGreen};
    font-size: .9.4rem;
    font-weight:600;
    margin-top:.8rem;
    z-index:9;
    text-decoration:none;

        &:hover{
            color: ${(props) => props.theme.colors.midGrey};
        }
`

//inner form wrapper
export const FormWrapper = styled.form`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-top:5.5rem;
`

//toggle motion animation values on different states(expanded, collapsed)
const topAnimVariants = {

    expanded: {
        width: '232%',
        height: '1350px',
        borderRadius:'20%',
        transform: 'rotate(60deg)'
    },
    collapsed: {
        width: '160%',
        height: '535px',
        borderRadius:'50%',
        transform: 'rotate(60deg)'
    }
}

const FormPage = () =>  {

     // motion animation
     const [isExpanded, setIsExpanded] = useState(false);
     //toggle between login/register
     const [active, setActive] = useState("login");
     
     //Expand transition configurations
     const expandTransition = {
         type: "spring",
         duration: 2.5, //duration in seconds
         stiffness: 31  //the way it contracts - more or less tension
     }

     //toggle between Expand/Collapse animation
     const toggleExpanded = () => {
         setIsExpanded(true)
         // set the duration of the animation
         setTimeout(() => {
          setIsExpanded(false);
        //we want it to collapse right after it finishes to expand (2.5 seconds)
        //we multiply with 1000 to convert it to milliseconds, then decrease the convenient amount of seconds
         }, expandTransition.duration * 1000 - 1550)
     }

     //motion animation when click on Register
     //set the active state to register value
     const switchToRegister = () => {
          toggleExpanded()
          setTimeout(() => {
              setActive("register")
          }, 500)
  }

   //motion animation when click on Login
   //set the active state to login value
   const switchToLogin = () => {
      toggleExpanded()
      setTimeout(() => {
          setActive("login")
      }, 500)
}

const contextValue = {switchToLogin, switchToRegister}

    return (
        <>
        <AccountContext.Provider value={contextValue}>
          <FormPageContainer>
              <FormContainer>
               <TopAnimWrapper>
                  {/* if you don't want the animation to occur when the page first renders,
                  you must set the initial value to false  */}
                   <TopAnim initial ={false} 
                            animate = {isExpanded ? "expanded" : "collapsed" }
                            variants={topAnimVariants}
                            transition={expandTransition} />
               </TopAnimWrapper>
              {active === "login" && 
               <TopTextContainer>
               <TopText>Login</TopText>
               <TopTextSmall>Please log in to continue</TopTextSmall>
               <TopTextLink to = "/">Back Home</TopTextLink>
               </TopTextContainer>
                 }

              {active === "register" && 
               <TopTextContainer>
               <TopText>Register</TopText>
               <TopTextSmall>Please register to continue</TopTextSmall>
               <TopTextLink to = "/">Back Home</TopTextLink>
               </TopTextContainer>
                 }
                <FormWrapper>
                {active === "login" && <Login />}
                {active === "register" && <Register />}
                </FormWrapper>
              </FormContainer>      
        </FormPageContainer>
        </AccountContext.Provider>
         
        </>
    )

    
}



export default FormPage
