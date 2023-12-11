import React from 'react';
import link_img from '../../img/link_img';

import './ToHome.scss';
import { Link } from 'react-router-dom';

export const ToHome = () => {
    return (
        <>
            <Link to='/garage-master' className='ToHome'>
                <img src={link_img.arrowRight} alt=''/>
                <span>вернуться на главную страницу</span>
            </Link>
        </>
    )
}
  