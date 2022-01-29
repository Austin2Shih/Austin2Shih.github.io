import React from 'react';
import './PrettyNav.css'
import Button from './Button';

function PrettyNav() {
  return (
  <div className='PrettyNavContainer'>
      <Button 
      src={require("../images/falling block game image.jpg")} 
      className='PROJECTS' 
      href='projects'>
      </Button>
  </div>
  );
}

export default PrettyNav;
