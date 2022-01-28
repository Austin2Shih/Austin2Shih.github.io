import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;1,700&display=swap');
      </style>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'/>
        </Switch>
      </Router>
    </>  
  );
}

export default App;
