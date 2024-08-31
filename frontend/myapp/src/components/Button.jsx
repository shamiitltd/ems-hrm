import React from 'react';
import '../css/button.css';
import { Link } from 'react-router-dom';
const AppButton = (props) => {
    return (
        <button className='button' onClick={props.onClick} style={props.style}>
            <Link to={props.link}>{props.label}</Link>
        </button>
    );
};

export default AppButton;