import React, {useState} from 'react';
import './Project.css'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

function Project(props) {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const linkText = props.hasGit? 'GITHUB-LINK' : '';

    return(
        <div className={click ? 'project-container active' : 'project-container'} onClick={props.onClick}>
            <p className='project-name'>
                {props.name}
            </p>
            <ul className='flexgrid'>
                <li>
                    <img src={props.src}  alt={props.name} className='project-image'></img>
                </li>
                <li>
                    <div className='project-info-block'>
                        <p className='project-dates'>
                            {props.date}
                        </p>
                        <a href={props.href} target='_blank' className='project-link'> 
                            {linkText}
                        </a>
                    </div>                
                </li>
            </ul>

            <div className={click ? 'project-description-block active' : 'project-description-block inactive'}>
                <p className='project-description' >
                    {props.children}
                </p>
            </div>
            <div className='expand-btn' onClick={handleClick}>
                {click? (<IoIosArrowUp className='button-symbol'/>) : (<IoIosArrowDown className='button-symbol'/>)}
            </div>
        </div>
    );
}

export default Project;