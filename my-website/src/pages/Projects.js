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
          name='THE FALLING BLOCK GAME'
          src={require('../images/falling block game image.jpg')}
          date='DEC 2021 - PRESENT'
          notes='EARLY DEVELOPMENT'
        >
          The falling block game is my first attempt at bulding a mobile video game in Unity.
        </Project>
      </li>
      <li className='project'>
        <Project
          name='C++ MINESWEEPER'
          src={require('../images/falling block game image.jpg')}
          date='DEC 2021 - PRESENT'
          notes='COMPLETED'
        >
          The falling block game is my first attempt at bulding a mobile video game in Unity.
        </Project>
      </li>
      <li className='project'>
        <Project
          name='THE FALLING BLOCK GAME'
          src={require('../images/falling block game image.jpg')}
          date='DEC 2021 - PRESENT'
          notes='EARLY DEVELOPMENT'
        >
          The falling block game is my first attempt at bulding a mobile video game in Unity.
        </Project>
      </li>
      <li className='project'>
        <Project
          name='C++ MINESWEEPER'
          src={require('../images/falling block game image.jpg')}
          date='DEC 2021 - PRESENT'
          notes='COMPLETED'
        >
          The falling block game is my first attempt at bulding a mobile video game in Unity.
        </Project>
      </li>
    </ul>
  </div>
  );
}

export default Projects;
