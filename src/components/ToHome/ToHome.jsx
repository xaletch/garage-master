import React from 'react';
import link_img from '../../img/link_img';

import './ToHome.scss';
import { Link } from 'react-router-dom';

export const ToHome = () => {
    return (
        <>
            <Link to='/' className='ToHome'>
                <img src={link_img.arrowRight} alt=''/>
                <span>Вернуться на главную страницу</span>
            </Link>
        </>
    )
}
  