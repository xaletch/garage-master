import React from 'react';

import '../../ContentsCase/ContentsCase.scss';

import link_img from '../../../../img/link_img';

import { ContentCaseItem } from '../../ContentsCase/ContentCaseItem';

export const CaseOpens = ({ drop, multipliedItems, translateX, winner, color }) => {

    return (
    <div className={`CaseOpens ${color}`}>
        <div className='CaseOpensRoulette'>
            <div className='CaseOpensContent' style={{
                transition: translateX !== 0 ? 'left 7s ease-out' : 'left 0s ease-out',
                left: `${translateX}px`
            }}>
                {multipliedItems.map((obj, index) => <ContentCaseItem {...obj} key={index} />)}
            </div>
        </div>
        <div className='arrows'>
            <div className={`arrowsTop ${color}`}>
                {/* <img src={link_img.case_open_arrow_top} alt=''/> */}
            </div>
            <div className={`arrowsBottom ${color}`}>
                {/* <img src={link_img.case_open_arrow_bottom} alt=''/> */}
            </div>
        </div>
        {winner && (
            drop.map((item, index) => (
                <div className={`winnings ${color}`} key={index}>
                    <div className='CaseShadow'></div>
                    <img src={item.image} alt={item.name} />
                    <h3>{item.name}</h3>
                </div>
            ))
        )}
    </div>
  )
}
