import React, { useState } from 'react';

import './CaseOpen.scss';

import { CaseOpens } from './CaseOpens';
import { useLazyGetItemSaleQuery, useLazyGetOpenCaseQuery } from '../../../redux/cases/cases';


export const CaseOpen = ({ name, url }) => {
    const [itemSale, setItemSale] = useState(false);

    const [open, { data, isLoading }] = useLazyGetOpenCaseQuery();
    const [sale] = useLazyGetItemSaleQuery();

    const handleOpenCase = () => {
        open(url);
        setItemSale(true);
    };

    const handleSaleItem = (id) => {
        const price = data?.data.drops.map((price) => price.price);
        
        if (id) {
            alert(`Вы действительно хотите продать данный предмет за ${price}₽`);
            sale(id);
            setItemSale(false);
        }
    };

    return (
        <>
            <h2 className='CaseName'>{name}</h2>
            <CaseOpens drop={data?.data.drops} itemSale={itemSale} />
            <div className='CaseOpenBtn'>
                {!data ? (
                    <>
                        <button className='sell btn' onClick={handleOpenCase}>Открыть</button>
                    </>
                ) : data && data?.data.drops.map((item, index) => (
                    <div key={index} className='button'>
                        <button className='tryAgain btn' onClick={handleOpenCase}>Попробовать еще</button>
                        <button className='sell btn' onClick={() => handleSaleItem(item.id)}>Продать предмет</button>
                    </div>
                ))}
            </div>
        </>
    )
}
