import React, { Fragment, useRef } from 'react';
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
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,800;1,700&display=swap');
      </style>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/resume' component={Resume} />
            <Route path='/' render={() =>
              <Fragment>
                <ul className='homepage-content'>
                  <li id='home' className='home'>
                    <Home></Home>
                  </li>
                  <li id='projects' className='projects'>
                    <Projects></Projects>
                  </li>
                  <li id='contact' className='contact'>
                    <Contact></Contact>
                  </li>
                </ul>
              </Fragment>
            }/>

          </Switch>

      </Router>
    </>  
  );
}

export default App;

/*
                  <li id='projects' className='projects'>
                    <Projects></Projects>
                  </li>
                  <li id='contact' className='contact'>
                    <Contact></Contact>
                  </li>

*/