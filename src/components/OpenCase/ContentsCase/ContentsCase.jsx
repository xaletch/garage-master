import React from 'react'

import './ContentsCase.scss';

export const ContentsCase = ({ items }) => {
  return (
    <div className='ContentsCase'>
      <h2>Содержимое кейса</h2>
      <div className='ContentCaseWrapper'>
        {items?.map((item, index) => (
          <div className={`ContentCaseItem ${
            item.rarity === 'Запрещённое' ? 'c1' :
            item.rarity === 'Промышленное качество' ? 'c2' :
            item.rarity === 'Тайное' ? 'c3' :
            item.rarity === 'Ширпотреб' ? 'c4' :
            item.rarity === 'Армейское качество' ? 'c5' :
            item.rarity === 'экстраординарного типа' ? 'c6': 
            item.rarity === 'Засекреченное' ? 'c7' : ''
          }`} key={index}>
            <div className="ContentCaseItemRing" style={{ border: `2px solid ${
                item.rarity === 'Запрещённое' ? '#9830b3' :
                item.rarity === 'Промышленное качество' ? '#3092bb' :
                item.rarity === 'Тайное' ? '#c9405d' :
                item.rarity === 'Ширпотреб' ? '#1dd87e' :
                item.rarity === 'Армейское качество' ? '#de7422' :
                item.rarity === 'экстраординарного типа' ? '#cbde22': 
                item.rarity === 'Засекреченное' ? '#4b22de' : ''}`}}>
              <img src={item.image} alt="" />
            </div>
            <div className='ContentCaseItemDescription'>
              <p className='name'>{item.name}</p>
              <span className='categoryName'>{item.rarity}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
