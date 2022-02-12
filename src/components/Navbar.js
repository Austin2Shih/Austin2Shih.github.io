import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import '../App'


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/#about-me" className="nav-logo"
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>
                    <img src={require('../images/logo512.png')} alt='logo' resizeMode={'cover'}>
                    </img>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <img className='clickable' src={require("../images/MenuIcon.png")} alt="=" height='30' resizeMode='contain'/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/#about-me' className='nav-links' onClick={closeMobileMenu}
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>
                            HOME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
                            RESUME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#projects' className='nav-links' onClick={closeMobileMenu} 
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>
                            PROJECTS
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/#contact' className='nav-links' onClick={closeMobileMenu}
                        scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>
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

