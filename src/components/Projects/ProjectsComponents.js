import styled from 'styled-components';
import {FaLink} from 'react-icons/fa'

//PORTFOLIO styled components

//Portfolio section wrapper
export const ProjectsWrapper = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-top:4rem;
    padding-bottom:4rem;
    height:auto;
    background: ${(props) => props.theme.colors.light };

    @media screen and (max-width:768px) {
        padding-top:3rem;
    }
`

//Portfolio section title
export const PortfolioTitle = styled.h1`
    color: ${(props) => props.theme.colors.dark};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight:500;
    margin-bottom:4rem;

    @media screen and (max-width:480px) {
        font-size: ${(props) => props.theme.fontSizes.medium};
    }
`

//Portfolio filter list
export const FilterList = styled.ul`
    display:flex;
    justify-content: center;
    align-items: flex-start;
    margin-top:1rem;
    margin-bottom:1.4rem;
    font-size: 1.4rem; 
    list-style:none;
    width: 100%;

    @media screen and (max-width:768px) {
        flex-direction:column;
        align-items:center;
        font-size: ${(props) => props.theme.fontSizes.small};
    }

`
//Portfolio filter item
export const FilterItem = styled.li`
    border-right: 1px solid ${(props) => props.theme.colors.darkGreen};
    float: left;
    line-height: 16px;
    margin-right: .7rem;
    padding-right: .7rem;
    cursor:pointer;

    &:last-child{
        border-right:none;
    }

    @media screen and (max-width:768px) {
        border:none;
        padding: .5rem 0 .5rem 0;
    }

`
//Portfolio filter link
export const FilterLink = styled.a`
    color: ${(props) => props.theme.colors.darkGreen}; 
    text-decoration: none; 
    transition:${(props) => props.theme.transitions.inOut};

    &:hover {
        color: ${(props) => props.theme.colors.midGreen}
        }

`

//Portfolio projects container
export const ProjectsContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items:center;
    grid-gap:2.2rem; 
    max-width:1300px;
    margin:0 auto;
    margin-top:2rem;
    padding:0 4.2rem;

    @media screen and (max-width:1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
        padding: 0 1.8rem
    }   

`

//Portfolio project card
export const ProjectCard = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:flex-start;
    padding:1.5rem 2.5rem 2.5rem 2.5rem;
    border-radius:${(props) => props.theme.radius.square};
    transition:${(props) => props.theme.transitions.inOut};
    box-shadow: 0 1px 3px rgba(0,0,0,0.6);

    &:hover {
        transform: scale(1.1);
        background: ${(props) => props.theme.colors.lightGreen };
        cursor:pointer;
    }

`
//Portfolio project image
export const ProjectImage = styled.img`
    width:100%;
    min-height:100%;
    display:block;
    height:400px;
    -webkit-transition: transform 4s;
    -moz-transition: transform 4s;
    -ms-transition: transform 4s;
    -o-transition: transform 4s;
    transition:transform 4s;
`

//Portfolio project image overlay text
export const ImgText = styled.div`
    position: absolute;
    top:50%;
    left: 50%;
    -webkit-transform:translate(-50%,-50%);
    -moz-transform:translate(-50%,-50%);
    -ms-transform:translate(-50%,-50%);
    -o-transform:translate(-50%,-50%);
    transform:translate(-50%,-50%);
    text-align:center;
    opacity:0;
    -webkit-transition:opacity 3s;
    -moz-transition:opacity 3s;
    -ms-transition:opacity 3s;
    -o-transition:opacity 3s;
    transition:opacity 3s;
`
//Portfolio FaLink icon
export const ImgTextIcon = styled(FaLink)`
    margin-top:0.6rem;
    font-size:1rem;
    color:${(props) => props.theme.colors.light };
    -webkit-transition: all 700ms;
    -moz-transition: all 700ms;
    -ms-transition: all 700ms;
    -o-transition: all 700ms;
    transition: all 700ms;

    &:hover {
        transform: scale(1.1);
        color: ${(props) => props.theme.colors.midGreen };
        
    }
`
//Portfolio overlay text header
export const  ImgTextTitle = styled.h1`
    font-size:1.5rem;
    margin-bottom:0.5rem;
    color:${(props) => props.theme.colors.light };
`

//Portfolio project item
export const ProjectItem = styled.article`
    position:relative;
    background:${(props) => props.theme.colors.dark };
    color: #ffffff;
    overflow:hidden;
    margin: 1.5rem 0 0 0;
    padding:2rem;

    &:hover ${ProjectImage} {
    opacity:0.1;
    -webkit-transform:scale(1.1);
    -moz-transform:scale(1.1);
    -ms-transform:scale(1.1);
    -o-transform:scale(1.1);
    transform:scale(1.1);
    cursor:pointer;
    } 
    &:hover ${ImgText} {
        opacity:1;

}
`





