import React from 'react';

import './CaseOpen.scss';

import { useSelector } from 'react-redux';

import { CaseOpens } from './CaseOpens';
import { useLazyGetItemSaleQuery, useGetUserItemsQuery, useGetUserQuery } from '../../../redux/cases/cases';


export const CaseOpen = ({ name, item, color, dataWin, winner, translateX, isSpinning, setSold, sold, isWin, handleOpenMore, multipliedItems, setShowNotification, playAudioOpen, isMuted }) => {
    const { start_price, end_price, page } = useSelector((state) => state.filterCase);

    const {refetch: refetchUserItems } = useGetUserItemsQuery({ start_price, end_price, page });
    const { refetch: refetchUserData } = useGetUserQuery(null);

    const [sale] = useLazyGetItemSaleQuery();
    const price = dataWin.map((price) => price.price);
    
    const handleSaleItem = (id) => {        
        sale(id);

        refetchUserItems({ start_price, end_price, page });

        setSold(true);

        setShowNotification(true);

        setTimeout(() => {
            refetchUserData();
        }, 100);

        setTimeout(() => {
            setShowNotification(false);
        }, 3350);
    };

    return (
        <>
            <h2 className='CaseName'>{name}</h2>
            <CaseOpens playAudioOpen={playAudioOpen} drop={dataWin} item={item} multipliedItems={multipliedItems} translateX={translateX} winner={winner} color={color} isWin={isWin} isMuted={isMuted} />
            <div className='CaseOpenBtn'>
                {winner && dataWin && dataWin.map((item, index) => (
                    <div key={index} className='button'>
                        <button className={`tryAgain btn ${color}`} onClick={handleOpenMore} disabled={isSpinning}>Попробовать еще</button>
                        <button className='sell btn' onClick={() => handleSaleItem(item.id)} disabled={sold}>{!sold ? `Продать за ${price}₽` : `Продан за ${price} ₽`} </button>
                    </div>
                ))}
            </div>
        </>
    )
}
