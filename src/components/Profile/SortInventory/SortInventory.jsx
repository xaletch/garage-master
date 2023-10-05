import React from 'react'

import './SortInventory.scss';

export const SortInventory = () => {
  return (
    <div className='SortInventory'>
        <div className='SortInventoryCategory'>
            <ul className='categoryList'>
                <li className='categoryItem active'>Дропы</li>
                <li className='categoryItem'>Кейсы</li>
                <li className='categoryItem'>Ежедневные бонусы</li>
            </ul>
        </div>
        <button className='SellEverything'>Продать все</button>
        <div className='SortInventoryPrice'>
            <ul className='priceList'>
                <li className='priceItem'>0-9₽</li>
                <li className='priceItem'>10-49₽</li>
                <li className='priceItem active'>50-99₽</li>
                <li className='priceItem'>100-999₽</li>
                <li className='priceItem'>1000+₽</li>
            </ul>
        </div>
    </div>
  )
}