import React from 'react';
import './PrettyNav.css'
import Button from './Button';

function PrettyNav() {
  return (
  <div className='PrettyNavContainer'>
      <ul className='nav-list'>
        <li>
          <Button 
            src={require("../images/falling block game image.jpg")} 
            className='RESUME' 
            href='resume'>
          </Button>
        </li>
        <li>
          <Button 
            src={require("../images/falling block game image.jpg")} 
            className='SPOTIFY STAT TRACKER' 
            href='spotify-stat-tracker'>
          </Button>
        </li>
        <li>
          <Button 
            src={require("../images/falling block game image.jpg")} 
            className='PROJECTS' 
            href='projects'>
          </Button>
        </li>
      </ul>
      
  </div>
  );
}

export default PrettyNav;
