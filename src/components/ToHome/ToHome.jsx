import React from 'react';
import link_img from '../../img/link_img';

import './ToHome.scss';

export const ToHome = () => {
    return (
        <>
            <a className='ToHome' href='#'>
                <img src={link_img.arrowRight} alt=''/>
                <span>вернуться на главную страницу</span>
            </a>
        </>
    )
}
