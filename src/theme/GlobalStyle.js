import  { createGlobalStyle } from 'styled-components';

//here you can add your most general style
//we import it in the root-index.js: import GlobalStyle from './theme/globalStyles';

 const GlobalStyle = createGlobalStyle`
 
 *{
 box-sizing: border-box;
 font-family: "IBM Plex Sans",sans-serif;
 padding: 0;
 margin: 0
 }

html  {
    height:100%;
}


body {
    overflow-x: hidden;

    @media screen and (max-width: 768px) {
    padding: 0 1rem 0 2rem;
  }
}



p {
    line-height: 1.8;
}

`;

export default GlobalStyle;