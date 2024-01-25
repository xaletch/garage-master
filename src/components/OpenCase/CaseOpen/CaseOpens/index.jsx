import React from 'react';

import '../../ContentsCase/ContentsCase.scss';

import { ContentCaseItem } from '../../ContentsCase/ContentCaseItem';

export const CaseOpens = ({ drop, multipliedItems, translateX, winner, color, isWin }) => {

    return (
        <div className={`CaseOpens ${color}`}>
            <div className='CaseOpensRoulette'>
                <div className='CaseOpensContent' style={{
                    transition: !isWin ? 'transform 8s cubic-bezier(0.220, 0.350, 0.310, 0.985) 0s' : isWin ? 'transform 1.2s ease' : 'transform 0s ease',
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
                        <div className={`CaseShadow CaseShadow-2 ${color}`}></div>
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                    </div>
                ))
            )}
        </div>
    )
}
