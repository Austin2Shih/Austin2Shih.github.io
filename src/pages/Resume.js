import React from 'react';
import './Resume.css'


function Resume() {
  return (
  <div className='resume-container'>
      <div className='resume-block'>
          <div className='download-block'>
            <a href={require('../documents/Resume - Austin Shih.pdf')} className='download-link' target='_blank'>
              <i className='download-text'>
                DOWNLOAD
              </i>
            </a>
          </div>
          <div className='resume-constraints'>
            <img src={require("../images/Resume - Austin Shih.png")} alt='Resume'></img>
          </div>
      </div>
      <div className='download-block-2'>
            <a href={require('../documents/Resume - Austin Shih.pdf')} className='download-link' target='_blank'>
              <i className='download-text'>
                DOWNLOAD
              </i>
            </a>
          </div>
  </div>
  );
}

export default Resume;
