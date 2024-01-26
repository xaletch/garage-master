import React from 'react';

import { Link } from 'react-router-dom';

import './ReturnHomeButton.scss';

export const ReturnHomeButton = ({ name, stop }) => {
    
    const handleClick = () => {
        stop();
    };
    return (
        <div className='ReturnHomeButton'>
            <div className='ReturnHomeItem' onClick={handleClick}>
                <Link to='/'>Главная</Link>
            </div>
            /
            <div className='ReturnHomeItem'>
                <span>{name}</span>
            </div>
        </div>
    )
}
