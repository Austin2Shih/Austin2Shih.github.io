import React from 'react';
import './Resume.css'


function Resume() {
  return (
  <div className='resume-container'>
      <div className='resume-subtitle-container'>
        <i className='subtitle'>
            RESUME
        </i>
      </div>
      <div className='download-block'>
        <a href={require('../documents/Resume - Austin Shih.pdf')}>
          <i className='download-text'>
              DOWNLOAD
          </i>
        </a>
      </div>
      <div className='resume-block'>
          <div className='resume-constraints'>
            <img src={require("../images/Resume - Austin Shih.png")} alt='Resume'></img>
          </div>
      </div>
  </div>
  );
}

export default Resume;
