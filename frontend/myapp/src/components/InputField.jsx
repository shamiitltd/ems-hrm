import React from 'react';
import '../css/inputfield.css';

const AppInputField = (props) => {
    return (
        <input className='input'
            type="text" 
            value={props.value} 
            onChange={props.onChange} 
            placeholder={props.placeholder} 
        />
    );
};

export default AppInputField;