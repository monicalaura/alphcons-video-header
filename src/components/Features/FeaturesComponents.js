import styled from 'styled-components';

//The styled components for the 3 section of Features 

//Features general wrapper
export const FeaturesWrapper = styled.section`
    width:100%;
    margin-bottom:3rem;
  
    
`


//Feature container
export const FeaturesDataContainer = styled.div`
    display:grid;
    justify-content:center;
    margin-right:auto;
    margin-left:auto;
    padding: 0 2rem;
    height:650px;
    width:100%;
    z-index:1;
    // lightBcg prop can be true/false, see data.js
    background: ${({lightBcg}) => (lightBcg ? '#ffffff' : '#010203')};

    @media screen and (max-width:768px){
        padding: 2rem;
    }

`
//Feature row
export const FeaturesDataRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    max-width:1300px;
    /* if the prop imgFirst is true, col2 (the img container) comes first. 
    You can modify the true/false value in data.js, for a different display */
    grid-template-areas: ${({imgFirst}) => (imgFirst ? `'col2 col1'`: `'col1 col2'`)};
    margin-top:2rem;
    
    @media screen and (max-width:768px){
        display:flex;
        flex-direction: ${({imgFirst}) => (imgFirst ? 'column-reverse': 'column')};

    }
`
//Feature column 1
export const Col1 = styled.div`
    padding: 0 1.2rem;
    margin-bottom:1.2rem;
    grid-area:col1;

    @media screen and (max-width:768px){
        padding:0;
        margin:0;

    }

`
//Features column 2
export const Col2 = styled.div`
    padding: 0 1.2rem;
    margin-bottom:1.2rem;
    grid-area:col2;
    
    @media screen and (max-width:768px){
        padding:1.2rem;
        margin:0;

    }
`
//text container
export const TextContainer = styled.div`
    max-width:600px;
    padding-top: 0;
    padding-bottom:4.5rem;
   
`
//upper text
export const UpperText = styled.p`
    color: ${(props) => props.theme.colors.midGreen };
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight:600;
    margin-bottom:1.3rem;
    text-transform:uppercase;
    letter-spacing:1.3px;
    line-height:1.3rem;   

    @media screen and (max-width:480px){
        font-size: ${(props) => props.theme.fontSizes.smaller};
   }

`
//title
export const Title = styled.h1`
    color: ${({lightTxt}) => (lightTxt ? '#ffffff' : '#010407')};
    font-size: ${(props) => props.theme.fontSizes.large};
    font-weight:500;
    margin-bottom:2rem;

    @media screen and (max-width:480px){
        font-size: ${(props) => props.theme.fontSizes.small};
   }
    
`

//paragraph
export const Description = styled.p`
    max-width:480px;
    color: ${({darkTxt}) => (darkTxt ? '#61656d' :'#ffffff')};
    font-size: ${(props) => props.theme.fontSizes.small};
    font-weight:400;
    margin-bottom:2.8rem;
    letter-spacing:1.3px;
    line-height:2rem;

    @media screen and (max-width:480px){
        font-size: ${(props) => props.theme.fontSizes.smaller};
       }
    
`
//more info button
export const BtnContainer = styled.div`
    display:flex;
    justify-content:flex-start;    
    
`
//image container
export const ImgContainer = styled.div`
    max-width:600px;
    height:100%;    
`

//image
export const Image = styled.img`
    margin: 0 0 0.8rem 0;
    padding-right:0;
    width:100%;  
      
`   

