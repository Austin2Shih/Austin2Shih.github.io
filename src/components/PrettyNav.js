import React from 'react';
import './PrettyNav.css'
import Button from './Button';

function PrettyNav() {

    const scrollToProjects = () => {
        var scrollHeight;
        if (window.innerWidth <= 740) {
            scrollHeight = 1000;
        } else if (window.innerWidth <= 1240) {
            scrollHeight = 1480;
        } else {
            scrollHeight = 830;
        }
        window.scrollTo({
          top: scrollHeight, 
          behavior: 'smooth'
        });
    }

  return (
  <div className='PrettyNavContainer'>
      <ul className='nav-list'>
        <li>
          <Button 
            src={require("../images/resume-icon.png")} 
            className='' 
            href='resume'
            marginTop='0'
            marginLeft='10'
            imageScale='0.9'
            >
          </Button>
        </li>
        <li>
          <Button 
            src={require("../images/falling block game image.jpg")} 
            className='IN PROGRESS' 
            href='spotify-stat-tracker'
            marginTop='8'
            marginLeft='-20'
            imageScale='0.85'
            >
          </Button>
        </li>
        <li>
          <Button 
            src={require("../images/falling block game image.jpg")} 
            className='PROJECTS' 
            href='projects'
            marginTop='8'
            marginLeft='-20'
            imageScale='0.85'
            onClick={scrollToProjects}
            >
          </Button>
        </li>
      </ul>
      
  </div>
  );
}

export default PrettyNav;
