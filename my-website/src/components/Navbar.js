import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="nav-item">
                    
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <img src="../public/images/Hamburger Menu Icon.png" alt="="></img>
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
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            PROJECTS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            CONTACT
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/onlyMobile' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Only Mobile
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle = 'btn--outline'></Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar;

