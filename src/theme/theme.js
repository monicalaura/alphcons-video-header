/* here you modify your theme styles such as colors, fontSizes, transition, border redius,
 and you are free to add much more to it */

/* import it in index.js: import  { ThemeProvider } from 'styled-components';
import Theme from './theme.js'; 
to use it in styled components: 
e.g. color: ${(props) => props.theme.colors.dark}; */

 const theme = {

    colors: {
        dark:'#030404',
        light: '#ffffff',
        darkGrey: '#21252b',
        midGrey: '#61656d',
        lightGrey: '#909398',
        mutedGrey: 'rgba(200,200,200, 0.9)',
        darkGreen: '#15b5ab',
        midGreen: '#18e0d3',
        lightGreen: '#8bf0e9',
        error: '#F5271A'
    },

    fontSizes: {
        title: '3.5rem',
        large: '2.4rem',
        mediumLarge: '2rem',
        medium: '1.3rem',
        small: '1.1rem',
        smaller:'1rem',
        smallest: '.7rem'
    },

    transitions: {
      ease: ' all 0.9s ease', 
      inOut: 'all 0.4s ease-in-out',
      linear: 'all 0.3s linear'
    },

    radius:{
        round: '50%',
        halfRound: '100px 100px 100px 100px',
        square: '7px',
        halfSquare:'20px'
        
    }
};
  
export default theme;