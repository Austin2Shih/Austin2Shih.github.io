import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import aboutMe from './components/aboutMe'
import PrettyNav from './components/PrettyNav'

function App() {
  return (
    <>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;1,700&display=swap');
      </style>
      <Router>
        <Navbar />
        <PrettyNav />
        <Switch>
          <Route path='/' exact component={aboutMe} />
        </Switch>
      </Router>
    </>  
  );
}

export default App;
