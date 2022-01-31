import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="nav-logo">
                    <img src={require('../images/logo512.png')} alt='logo'>
                    </img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <img className='clickable' src={require("../images/MenuIcon.png")} alt="=" height='30' resizeMode='contain'/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                            RESUME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#projects' className='nav-links' onClick={closeMobileMenu}>
                            PROJECTS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#contact' className='nav-links' onClick={closeMobileMenu}>
                            CONTACT
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/onlyMobile' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Only Mobile
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;

