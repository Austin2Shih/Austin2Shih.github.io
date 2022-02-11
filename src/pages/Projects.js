import React, {useRef} from 'react'
import './Projects.css'
import Project from '../components/Project'


function Projects() {

  return (
  <div className='projects-container'>
    <div className='subtitle-divider'>
      <p className='subtitle-text'>
        PROJECTS
      </p>
    </div>
    <div className='project-blocks'>
      <div className='right-button'></div>
        <ul className='project-list'>
          <li className='project'>
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
              href='https://github.com/liandy1028/Hoffman-Minesweeper'
              src={require('../images/minesweeper-image')}
              date='DEC 2020'
              notes='COMPLETED'
            >
              This project is a recreation of Minesweeper with an interactive UI made with C++ and the 
              SFML library. Due to the effective modularized structure of our project, splitting the 
              work up between 4 group members was seamless. This project was initially coded and tested 
              with a simple text based UI in the terminal and switching over to a more interactive 
              interface only required replacing the text UI functions to the interactive UI functions. 
              C++ Minesweeper was the first fully functioning game I had created and it gave me a glimpse 
              of what it’s like to code in a team setting.
            </Project>
          </li>
          <li className='project'>
            <Project
              name='RING DETECTION OPENCV'
              href='https://github.com/Future14473/Ultimate-Road-Runner/tree/dev/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/ComputerVision'
              src={require('../images/ring-detection.png')}
              date='AUG 2020 - APR 2021'
              notes='COMPLETED'
            >
              The Computer VIsion task for the 2020-2021 FTC robotics competition required an accurate and 
              reliable algorithm to consistently count orange rings in a stack. My main challenge was creating
              adaptability to different lighting conditions. Instead of using histogram normalization, 
              I decided to run experiments relating the overall lighting in an image to the required threshold
                used for ring detection. Using these experimental values, I built a fast working regression 
                model that was able to consistently count and locate stacks of rings. I am most proud of this
                project because I was able to push my creativity instead of just using the first result of 
                an internet search.
            </Project>
          </li>
          <li className='project'>
            <Project
              name='PANCAKEBOT-BOT'
              href='https://github.com/Austin2Shih/Pancakebot-bot'
              src={require('../images/Pancakebot-image.PNG')}
              date='SUMMER 2020'
              notes='COMPLETED'
            >
              Pancakebot-bot is a Python script that automatically farms Discord's Pancakebot by fishing
              and answering Trivia questions. I started by targeting Trivia which stumped me with impossible
                questions about Japanese Manga & Anime. While researching, I stumbled across the Open Trivia
                API that Pancakebot used to create a database of Trivia answers. Then, I used Google’s 
                Tesseract OCR to decipher Pancakebot’s discord messages and reformatted them to account 
                for the OCR’s inaccuracies. Although the millions of pancakes my bot brought me were undeserved, 
                watching Pancakebot-bot answer trivia questions faster than I could read them helped me discover
                  a passion for automation.
            </Project>
          </li>
          <li className='project'>
            <Project
              name='THE FALLING BLOCK GAME'
              href='https://github.com/Austin2Shih/The-Falling-Block-Game/tree/dev'
              src={require('../images/falling block game image.jpg')}
              date='DEC 2021 - PRESENT'
              notes='IN PROGRESS'
            >
              The Falling Block Game is my first attempt at building a mobile video game in Unity. 
              The game takes place in a grid where blocks fall from above to form an infinite tower. 
              The goal is to avoid being squished from above and climb the tower formed by the blocks 
              for as long as possible. As a recent development, I decided to rename the game to Super-Shiba
              and focus on spawning enemies rather than the falling blocks now that I’ve learned the basics
              of Unity.
            </Project>
          </li>
        </ul>
    </div>
  </div>
  );
}

export default Projects;
