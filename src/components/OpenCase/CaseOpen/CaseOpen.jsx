import React, { useEffect, useState } from 'react';

import './CaseOpen.scss';

import { CaseOpens } from './CaseOpens';
import { useLazyGetItemSaleQuery, useLazyGetOpenCaseQuery } from '../../../redux/cases/cases';


export const CaseOpen = ({ name, url, item, isLoading }) => {
    const [itemSale, setItemSale] = useState(false);
    const [multipliedItems, setMultipliedItems] = useState([]);

    const [open, { data }] = useLazyGetOpenCaseQuery();
    const [sale] = useLazyGetItemSaleQuery();

    const [translateX, setTranslateX] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    const [winner, setWinner] = useState(false);
    const [caseOpening, setCaseOpening] = useState(false);
    
    const shuffleItems = (itemsToShuffle) => {
        let shuffledItems = itemsToShuffle.slice();
        for (let i = shuffledItems.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
        }
        return shuffledItems;
    };
      
    const initializeAndShuffleItems = () => {
        if (item) {
            const filledMultipliedItems = [];
            for (let i = 0; i < 90; i++) {
                filledMultipliedItems.push(item[i % item.length]);
            }
            const shuffledItems = shuffleItems(filledMultipliedItems);
            setMultipliedItems(shuffledItems);
        }
    };
    
    useEffect(() => {
        initializeAndShuffleItems()
    }, [item]);

    useEffect(() => {
        if(isSpinning) {
            const timer = setTimeout(() => {
                setIsSpinning(false);
                setWinner(true);
            }, 10100);
            return () => clearTimeout(timer);
        }
    }, [isSpinning]);

    const findLastIndexWithName = (arr, name) => {
        for (let i = arr.length - 7; i >= 0; i--) {
            if (arr[i].name === name) {
                return i;
            }
        }
        return -1;
    }

    const itemWidth = 191;
    const handleOpenCase = async () => {
        await open(url);
    };

    const handleOpenMore = async () => {
        await open(url);
        initializeAndShuffleItems();
        setTranslateX(0);
        setWinner(false);
        setCaseOpening(!caseOpening);
    }

    useEffect(() => {
        setTimeout(() => {
            if (data && data?.data) {
                const openedItemName = data?.data.drops.map((item) => item.name)[0];
                const lastItemIndex = findLastIndexWithName(multipliedItems, openedItemName);
               
                // console.log(multipliedItems);
                // console.log('openedItemName: ', openedItemName)
                // console.log('lastItemIndex: ', lastItemIndex)
    
                if (lastItemIndex !== -1) {
                    const leftPosition = lastItemIndex * itemWidth;
                    setTranslateX(-leftPosition);
                        
                    // console.log('leftPosition: ',leftPosition);
    
                    if (data) {
                        setIsSpinning(true);
                    }
                }
            }
        }, 1000);
    }, [data, caseOpening]);

    const price = data?.data.drops.map((price) => price.price);
    const handleSaleItem = (id) => {        
        if (id) {
            alert(`Вы действительно хотите продать данный предмет за ${price}₽`);
            sale(id);
            setItemSale(false);
        }
    };

    return (
        <>
            <h2 className='CaseName'>{name}</h2>
            <CaseOpens drop={data?.data.drops} itemSale={itemSale} item={item} multipliedItems={multipliedItems} translateX={translateX} winner={winner} />
            <div className='CaseOpenBtn'>
                {!winner ? (
                    <>
                        <button className='sell btn openBtn' onClick={handleOpenCase} disabled={isSpinning}>Открыть</button>
                    </>
                ) : data && data?.data.drops.map((item, index) => (
                    <div key={index} className='button'>
                        <button className='tryAgain btn' onClick={handleOpenMore} disabled={isSpinning}>Попробовать еще</button>
                        <button className='sell btn' onClick={() => handleSaleItem(item.id)} disabled={isSpinning}>Продать за {price}₽</button>
                    </div>
                ))}
            </div>
        </>
    )
}
