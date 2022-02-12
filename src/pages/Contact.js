import React from 'react';
import './Contact.css'

function Contact() {
  return (
  <div className='contacts-container'>
      <p className='subtitle'>
        CONTACT
      </p>
      <ul className='contacts-list'>
        <ul className='email-phone-list'>
          <li>
            <a className='link' href='mailto:austinhshih@gmail.com'>
              <i className='contact-type'>EMAIL: </i>
              <i className='contact-value'>austinhshih@gmail.com</i>
            </a>
          </li>
          <li>
            <i className='contact-type'>PHONE: </i>
            <i className='contact-value'>(510) 737-3634</i>
          </li>
        </ul>
        <ul className='socials-list'>
          <li>
            <a href='https://www.linkedin.com/in/austin-shih/' target='_blank' className='link'>
              <i className='contact-type'>LINKEDIN: </i>
              <i className='contact-value'>Austin-Shih</i>
            </a>
          </li>
          <li>
            <a href='https://github.com/Austin2Shih' target='_blank' className='link'>
              <i className='contact-type'>GITHUB: </i>
              <i className='contact-value'>Austin2Shih</i>
            </a>
          </li>
        </ul>
        <li>
        </li>
      </ul>
  </div>
  );
}



export default Contact;
