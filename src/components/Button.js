import React from 'react';
import './Button.css'
import { HashLink as Link } from 'react-router-hash-link';

function Button(props) { 
    const css = `.box-pic-${props.subClass} img{
        position: absolute;
        width: auto; 
        height: 100%; 
        overflow: hidden;  
        margin-top: ${props.marginTop}%;
        margin-left: ${props.marginLeft}%; 
        transform: scale(${props.imageScale});
    }`;

    return(
        <Link to={props.href} className='button-link' onClick={props.onClick}
        scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}>
            <div className='buttonContainer'>
                <p className='buttonText'>
                    {props.className}
                </p>
                <div className={`box-pic box-pic-${props.subClass}`}>
                    <style>
                        {css}
                    </style>
                    <img src={props.src}  alt={props.className}></img>
                </div>
            </div>
        </Link>
    );
}

export default Button;
    