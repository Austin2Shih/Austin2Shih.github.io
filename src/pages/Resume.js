import React from 'react';
import './Resume.css'


function Resume() {
  return (
  <div className='resume-container'>
      <div className='resume-block'>
          <a href={require('../documents/Resume - Austin Shih.pdf')} className='download-link' target='_blank'>
            <div className='download-block'>
              <i className='download-text'>
                DOWNLOAD
              </i>
              <img src={require('../images/download-button.png')} className='download-img'></img>
            </div>
          </a>
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
