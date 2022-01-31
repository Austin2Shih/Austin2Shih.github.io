import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';


function Button(props) { 
    const css = `.box-pic-${props.href} img{
        position: relative;
        width: auto; 
        height: 100%; 
        overflow: hidden;  
        margin-top: ${props.marginTop}rem;
        margin-left: ${props.marginLeft}px; 
        transform: scale(${props.imageScale});
    }`;

    return(
        <Link to={props.href} className='button-link'>
            <div className='buttonContainer' onClick={props.onClick}>
                <p className='buttonText'>
                    {props.className}
                </p>
                <div className={`box-pic box-pic-${props.href}`}>
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

/*{`margin-top: 5px; margin-left: 5px;`}*/
    