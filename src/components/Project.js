import React from 'react';
import './Project.css'

function Project(props) {

    return(
        <a href={props.href} target='_blank' className='project-link'>
        <div className='projectContainer' onClick={props.onClick}>
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
        </div>
        </a>
    );
}

export default Project;