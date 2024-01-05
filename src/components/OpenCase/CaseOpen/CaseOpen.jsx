import React, { useEffect } from 'react';

import './CaseOpen.scss';

import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import { CaseOpens } from './CaseOpens';
import { fetchCase } from '../../../redux/slices/casesSlice';


export const CaseOpen = () => {
    const dispatch = useDispatch();

    const { url } = useParams();

    useEffect(() => {
        if (url) {
            dispatch(fetchCase(url));
        }
    }, [url]);

    return (
        <div className='CaseOpen'>
            <h2 className='CaseName'>Бесплатный кейс #1</h2>
            <CaseOpens />
            <div className='CaseOpenBtn'>
                {/* <button className='tryAgain btn'>Попробовать еще</button>
                <button className='sell btn'>Продать предмет</button> */}
            </div>
        </div>
    )
}
