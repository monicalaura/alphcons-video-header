import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import FormPage from './pages/formPage'


function App() {
  return (
    <Router>    
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/form" component={FormPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
