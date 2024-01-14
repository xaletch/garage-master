import React, { useState } from 'react'

import './SortInventory.scss';


import { useDispatch } from 'react-redux';
import { setMaxPrice, setMinPrice, setPage } from '../../../redux/slices/filterCase';
import { useGetAllItemSaleQuery, useLazyGetAllItemSaleQuery } from '../../../redux/cases/cases';

const category = ["Кейсы"];
const priceList = [
    {min: "0", max: "9", name: "0-9", id: 1},
    {min: "10", max: "49", name: "10-49", id: 2},
    {min: "50", max: "99", name: "50-99", id: 3},
    {min: "100", max: "999", name: "100-999", id: 4},
    {min: "1000", max: "999999", name: "1000+", id: 5},
];

export const SortInventory = ({ start_price, end_price, page, refetchUserItems, refetchUserData, setOpenSaleMenu, setShowNotification, saleItems, setSaleItems }) => {
    const [selectCategory, setSelectCategory] = useState(0);
    const [selectedCategoryPrice, setSelectedCategoryPrice] = useState(null);

    const dispatch = useDispatch();

    // filter case
    const handleFilterPrice = (min, max) => {
        dispatch(setMinPrice(min));
        dispatch(setMaxPrice(max));
        dispatch(setPage(1));
    };

    const [allSale] = useLazyGetAllItemSaleQuery(); 

    const handleAllSaleItem = async ()  => {
        const { isSuccess, data: allSaleData } = await allSale(); 

        if (isSuccess) {
            refetchUserItems({ start_price, end_price, page });
            refetchUserData();
            setOpenSaleMenu(false);

            setSaleItems(allSaleData?.message);

            setShowNotification(true);
                
            setTimeout(() => {
                setShowNotification(false);
            }, 3350);
        }
    }
    
    return (
        <div className='SortInventory'>
            <div className='SortInventoryCategory'>
                <ul className='categoryList'>
                    {category.map((item, index) => (
                        <li className={selectCategory === index ? 'categoryItem active' : 'categoryItem'} key={index} onClick={() => setSelectCategory(index)}>{item}</li>
                    ))}
                </ul>
            </div>
            <button className='SellEverything' onClick={() => handleAllSaleItem()}>Продать все</button>
            <div className='SortInventoryPrice'>
                <ul className='priceList'>
                    {priceList.map((item, index) => (
                        <li className={selectedCategoryPrice === index ? 'priceItem active' : 'priceItem'} key={index} 
                        onClick={() => {
                            setSelectedCategoryPrice(index);
                            handleFilterPrice(item.min, item.max);
                        }}
                        >{item.name}₽</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}