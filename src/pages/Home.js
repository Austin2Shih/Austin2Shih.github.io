import React from 'react';
import './Home.css';
import AboutMe from '../components/AboutMe'
import PrettyNav from '../components/PrettyNav';

function Home() {
  return (
    <div className='home-container'>
        <ul className='home-menu'>
            <li className='about-me-grid'>
                <AboutMe></AboutMe>
            </li>
            <li className='about-me-grid'>
                <PrettyNav></PrettyNav>
            </li>
        </ul>
        
    </div>
    );
}

export default Home;
