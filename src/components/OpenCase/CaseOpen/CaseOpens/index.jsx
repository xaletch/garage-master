import React from 'react';

import '../../ContentsCase/ContentsCase.scss';

import { ContentCaseItem } from '../../ContentsCase/ContentCaseItem';

export const CaseOpens = ({ drop, multipliedItems, translateX, winner, color }) => {

    return (
        <div className={`CaseOpens ${color}`}>
            <div className='CaseOpensRoulette'>
                <div className='CaseOpensContent' style={{
                    transition: translateX !== 0 ? 'transform 8s cubic-bezier(0.220, 0.350, 0.310, 0.985) 0s' : 'transform 0s',
                    transform:`translate(${translateX}px)`
                }}>
                    {multipliedItems.map((obj, index) => <ContentCaseItem {...obj} key={index} />)}
                </div>
            </div>
            <div className='arrows'>
                <div className={`arrowsTop ${color}`}></div>
                <div className={`arrowsBottom ${color}`}></div>
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
