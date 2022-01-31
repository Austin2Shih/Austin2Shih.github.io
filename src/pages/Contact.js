import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'

function Contact() {
  return (
  <div className='contacts-container'>
      <p className='subtitle'>
        CONTACT
      </p>
      <ul className='contacts-list'>
        <li>
          <p>
            EMAIL: austinhshih@gmail.com
          </p>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/austin-shih/' className='link'>
            LINKEDIN: AUSTIN SHIH
          </a>
        </li>
        <li>
          <p>
            PHONE: (510) 737-3634
          </p>
        </li>
      </ul>
  </div>
  );
}



export default Contact;
