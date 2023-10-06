import React from 'react';

import './CaseOpen.scss';
import { CaseOpens } from './CaseOpens';

export const CaseOpen = () => {
    return (
        <div className='CaseOpen'>
            <h2 className='CaseName'>Бесплатный кейс #1</h2>
            <CaseOpens />
            <div className='CaseOpenBtn'>
                <button className='tryAgain btn'>Попробовать еще</button>
                <button className='sell btn'>Продать предмет</button>
            </div>
        </div>
    )
}
