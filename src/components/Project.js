import React, {useState} from 'react';
import './Project.css'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

function Project(props) {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const collapse = () => setClick(false);
    const buttonType = click? (<IoIosArrowUp className='button-symbol'/>) : (<IoIosArrowDown className='button-symbol'/>)
    return(
        //<a href={props.href} target='_blank' className='project-link'>
        <div className={click ? 'project-container active' : 'project-container'} onClick={props.onClick}>
            <p className='project-name'>
                {props.name}
            </p>
            <img src={props.src}  alt={props.name} className='project-image'></img>
            <div className='project-info-block'>
                <p className='project-dates'>
                    {props.date}
                </p>
                <p className='project-notes'>
                    {props.notes}
                </p>
            </div>
            <div className='project-description-block'>
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