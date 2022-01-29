import React from 'react';
import './aboutMe.css';

function aboutMe() {
  return (
    <div className='aboutMeBox'>
        <div class="circular-pic">
            <img src={require("../images/toki and me smol.jpeg")} alt='Picture of Me :D' /> 
        </div>
        <div className='helloBlock'>
            <i className='helloTxt'>
                Hello, I'm
            </i>
        </div>
        <div class="nameBlock">
            <i className='nameTxt'>
                Austin Shih
            </i>
        </div>
        <div className='aboutMeTextBlock'>
            <p className='aboutMeTxt'>
                I am a first-year Computer Science and <br></br>
                Engineering major at UC Davis. During the last <br></br>
                couple of years, I have been developing my <br></br>
                coding skills by recreating games, automating <br></br>
                complex tasks, and making websites.
            </p>
        </div>
    </div>
    );
}

export default aboutMe;
