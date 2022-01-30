import React from 'react';
import './Home.css';
import AboutMe from '../components/AboutMe'
import PrettyNav from '../components/PrettyNav';

function Home() {
  return (
    <div className='home-container'>
        <ul className='home-menu'>
            <li>
                <AboutMe></AboutMe>
            </li>
            <li>
                <PrettyNav></PrettyNav>
            </li>
        </ul>
        
    </div>
    );
}

export default Home;