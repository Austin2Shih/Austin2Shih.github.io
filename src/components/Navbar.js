import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import '../App'


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () =>{
        closeMobileMenu();
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };

    const scrollToProjects = () => {
        closeMobileMenu();
        var scrollHeight;
        if (window.innerWidth <= 740) {
            scrollHeight = 1000;
        } else if (window.innerWidth <= 1240) {
            scrollHeight = 1480;
        } else {
            scrollHeight = 830;
        }
        window.scrollTo({
          top: scrollHeight, 
          behavior: 'smooth'
        });
    }

    const scrollToContact = () => {
        closeMobileMenu();
        window.scrollTo({
          top: 10000, 
          behavior: 'smooth'
        });
    }

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="nav-logo">
                    <img src={require('../images/logo512.png')} alt='logo' resizeMode={'cover'}>
                    </img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <img className='clickable' src={require("../images/MenuIcon.png")} alt="=" height='30' resizeMode='contain'/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={scrollToTop}>
                            HOME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                            RESUME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link id='projects' to='/' className='nav-links' onClick={scrollToProjects}>
                            PROJECTS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={scrollToContact}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;

