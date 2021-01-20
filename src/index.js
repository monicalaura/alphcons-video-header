import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import Theme from './theme/theme.js';


ReactDOM.render(
  <ThemeProvider theme = {Theme}>
  <React.StrictMode>
  <GlobalStyle />
    <App />
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

