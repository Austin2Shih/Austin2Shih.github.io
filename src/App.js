import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;1,700&display=swap');
      </style>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/resume' component={Resume} />
          <ul className='homepage-content'>
            <li className='home'>
              <Route id='home' path='/' exact component={Home} />
            </li>
            <li className = 'projects'>
              <Route path='/' exact component={Projects} />
            </li>
            <li className='contact'>
              <Route path='/' exact component={Contact} />
            </li>
          </ul>
        </Switch>
      </Router>
    </>  
  );
}

export default App;
