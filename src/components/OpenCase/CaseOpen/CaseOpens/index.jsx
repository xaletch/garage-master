import React, { useEffect, useState } from 'react';

import '../../ContentsCase/ContentsCase.scss';

import link_img from '../../../../img/link_img';

import { ContentCaseItem } from '../../ContentsCase/ContentCaseItem';

export const CaseOpens = ({ drop, multipliedItems, translateX, winner }) => {

    return (
    <div className='CaseOpens'>
        <div className='CaseOpensRoulette'>
            <div className='CaseOpensContent' style={{
                transition: translateX !== 0 ? 'left 10s ease-out' : 'left 0s ease-out',
                left: `${translateX}px`
            }}>
                {multipliedItems.map((obj, index) => <ContentCaseItem {...obj} key={index} />)}
            </div>
        </div>
        <div className='arrows'>
            <div className='arrowsTop'>
                <img src={link_img.case_open_arrow_top} alt=''/>
            </div>
            <div className='arrowsBottom'>
                <img src={link_img.case_open_arrow_bottom} alt=''/>
            </div>
        </div>
        {winner && (
            drop.map((item, index) => (
                <div className='winnings' key={index}>
                    <div className='CaseShadow'></div>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                </div>
            ))
        )}
    </div>
  )
}
