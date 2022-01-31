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
            <i className='contact-type'>EMAIL: </i>
            <i className='contact-value'>austinhshih@gmail.com</i>
          </li>
          <li>
            <i className='contact-type'>PHONE: </i>
            <i className='contact-value'>(510) 737-3634</i>
          </li>
        </ul>
        <ul className='socials-list'>
          <li>
            <a href='https://www.linkedin.com/in/austin-shih/' className='link'>
              <i className='contact-type'>LINKEDIN: </i>
              <i className='contact-value'>Austin-Shih</i>
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
