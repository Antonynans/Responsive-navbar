import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/index';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Navbar} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
