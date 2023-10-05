import React, { useState } from 'react'

import './SortInventory.scss';

const category = ["Дропы", "Кейсы", "Ежедневные бонусы"];
const priceList = [
    {name: "0-9", id: 1},
    {name: "10-49", id: 2},
    {name: "50-99", id: 3},
    {name: "100-999", id: 4},
    {name: "1000+", id: 5},
];

export const SortInventory = () => {
    const [selectCategory, setSelectCategory] = useState(0);
    const [selectedCategoryPrice, setSelectedCategoryPrice] = useState(2);
  return (
    <div className='SortInventory'>
        <div className='SortInventoryCategory'>
            <ul className='categoryList'>
                {category.map((item, index) => (
                    <li className={selectCategory === index ? 'categoryItem active' : 'categoryItem'} key={index} onClick={() => setSelectCategory(index)}>{item}</li>
                ))}
            </ul>
        </div>
        <button className='SellEverything'>Продать все</button>
        <div className='SortInventoryPrice'>
            <ul className='priceList'>
                {priceList.map((item, index) => (
                    <li className={selectedCategoryPrice === index ? 'priceItem active' : 'priceItem'} key={index} onClick={() => setSelectedCategoryPrice(index)}>{item.name}₽</li>
                ))}
            </ul>
        </div>
    </div>
  )
}