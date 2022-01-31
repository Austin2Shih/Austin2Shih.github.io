import React from 'react';
import './PrettyNav.css'
import Button from './Button';

function PrettyNav() {
  return (
  <div className='PrettyNavContainer'>
      <ul className='nav-list'>
        <li>
          <Button 
            src={require("../images/resume-icon.png")} 
            className='' 
            href='resume'
            marginTop='0'
            marginLeft='27'
            imageScale='0.9'
            >
          </Button>
        </li>
        <li>
          <Button 
            src={require("../images/falling block game image.jpg")} 
            className='IN PROGRESS' 
            href='spotify-stat-tracker'
            marginTop='1.75'
            marginLeft='-65'
            imageScale='0.85'
            >
          </Button>
        </li>
        <li>
          <Button 
            src={require("../images/falling block game image.jpg")} 
            className='PROJECTS' 
            href='projects'
            marginTop='1.75'
            marginLeft='-65'
            imageScale='0.85'
            >
          </Button>
        </li>
      </ul>
      
  </div>
  );
}

export default PrettyNav;
