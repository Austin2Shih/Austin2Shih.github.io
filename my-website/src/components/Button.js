import React from 'react';
import './Button.css'
import { Link } from 'react-router-dom';


function Button(props) {
    return(
        <Link to={props.href} className='button-link'>
            <div className='buttonContainer' onClick={props.onClick}>
                <p className='buttonText'>
                    {props.className}
                </p>
                <div className='box-pic'>
                    <img src={props.src}  alt={props.className}></img>
                </div>
            </div>
        </Link>
    );
}

export default Button;
    