import React, {useRef} from 'react'
import './Projects.css'
import Project from '../components/Project'


function Projects() {

  const projectsRef = useRef();
    
  var scrollFunction = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth'});
  }

  return (
  <div ref={projectsRef} className='projects-container'>
      <div className='subtitle-divider'>
        <p className='subtitle-text'>
          PROJECTS
        </p>
      </div>

    <ul className='project-blocks'>
      <li className='project' onClick={scrollFunction}>
        <Project
          name='OVERWATCH TACTICAL CROUCH'
          src={require('../images/overwatch-workshop.png')}
          date='SUMMER 2019'
          notes='COMPLETED'
        >
          After years of playing Overwatch, I set out to revitalize my friends’ 
          waning interest in standard modes by using its workshop mode to code a 
          ridiculous custom game-mode where players get eliminated, not by futuristic 
          weapons of war, but by being sat on. I relished the uncontrollable laughter 
          of my friends being paralyzed by sleep darts, helpless from the encroaching 
          buttocks. Even something as simple as the “kill” condition took countless lines 
          of code since I had to account for a frustrating amount of edge cases. 
          Regardless, the experience exposed me to a new realm of digital creation 
          and led to me learning CAD, Illustrator, and programming.
        </Project>
      </li>
      <li className='project'>
        <Project
          name='C++ MINESWEEPER'
          src={require('../images/minesweeper-image')}
          date='DEC 2020'
          notes='COMPLETED'
        >
          This project is a recreation of Minesweeper with an interactive UI made with C++ and SFML.
           Due to the effective modularized structure of our project, splitting up the work between 
           4 group members was seamless. For example, this project was initially coded and tested with 
           a simple text based UI in the terminal and switching over to a more interactive interface 
           only required replacing the display text UI functions to the display interactive UI functions.
        </Project>
      </li>
      <li className='project'>
        <Project
          name='RING DETECTION OPENCV'
          src={require('../images/ring-detection.png')}
          date='AUG 2020 - APR 2021'
          notes='COMPLETED'
        >
          The Computer VIsion task for the 2020-2021 FTC robotics competition required an accurate and 
          reliable algorithm to consistently count orange rings in a stack. One problem was adaptability
           to different lighting conditions. Instead of using histogram normalization, I decied to run 
           experiments relating the overall lighting in a room to the required threshold. Using these 
           experimental values, I built a working regression model. Using similar experimental methods, 
           I managed to also determine the relative location of rings to the robot as well. I am most proud 
           of this project because I pushed my creativity by experimenting outside of internet solutions.
        </Project>
      </li>
      <li className='project'>
        <Project
          name='PANCAKEBOT-BOT'
          src={require('../images/falling block game image.jpg')}
          date='SUMMER 2020'
          notes='COMPLETED'
        >
          Pancakebot-bot is a Python script that automatically farms Discord's Pancake-bot by fishing and 
          answering Trivia questions. I leveraged OpenCV and the pyTesseract OCR to read in fishing and 
          Trivia questions from Discord. Then, using the OpenTrivia API, I generated a database of Trivia 
          questions so Pancakebot-bot could answer questions faster than I could even read them. 
        </Project>
      </li>
      <li className='project'>
        <Project
          name='THE FALLING BLOCK GAME'
          src={require('../images/falling block game image.jpg')}
          date='DEC 2021 - PRESENT'
          notes='IN PROGRESS'
        >
          The falling block game is my first attempt at building a mobile video game in Unity. The game 
          takes place in a constrained square where blocks spawn from above. The goal is to avoid being 
          squished from above and climb the tower formed by the blocks for as long as possible.
        </Project>
      </li>
    </ul>
  </div>
  );
}

export default Projects;
