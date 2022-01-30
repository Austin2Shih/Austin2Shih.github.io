import React from 'react';
import './Project.css'

function Project(props) {
    return(
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
    );
}

export default Project;