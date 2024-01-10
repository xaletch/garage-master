import React from 'react'

import './ContentsCase.scss';

export const ContentsCase = ({ items }) => {
  return (
    <div className='ContentsCase'>
      <h2>Содержимое кейса</h2>
      <div className='ProfileBottom ContentWrapper'>
        {items?.map((item, index) => (
          <div className={`ProfileBottomCard ${
            item.rarity === 'Запрещённое' ? 'purple' :
            item.rarity === 'Промышленное качество' ? 'blue' :
            item.rarity === 'Тайное' ? 'red' :
            item.rarity === 'Ширпотреб' ? 'green' :
            item.rarity === 'Армейское качество' ? 'blue' :
            item.rarity === 'экстраординарного типа' ? 'yellow': 
            item.rarity === 'Засекреченное' ? 'pink' : ''}`} key={index}
          >
            <div className={`ProfileCardInner ${
              item.rarity === 'Запрещённое' ? 'purple' :
              item.rarity === 'Промышленное качество' ? 'blue' :
              item.rarity === 'Тайное' ? 'red' :
              item.rarity === 'Ширпотреб' ? 'green' :
              item.rarity === 'Армейское качество' ? 'blue' :
              item.rarity === 'экстраординарного типа' ? 'yellow': 
              item.rarity === 'Засекреченное' ? 'pink' : ''}`}
            >
              <div className="ProfileBottomBlockRing" style={{ border: `2px solid ${
                item.rarity === 'Запрещённое' ? '#9830b3' :
                item.rarity === 'Промышленное качество' ? '#3092bb' :
                item.rarity === 'Тайное' ? '#db4343' :
                item.rarity === 'Ширпотреб' ? '#1dd87e' :
                item.rarity === 'Армейское качество' ? '#3092bb' :
                item.rarity === 'экстраординарного типа' ? '#cbde22': 
                item.rarity === 'Засекреченное' ? '#c9405d' : ''}`}}
              >
                <img src={item.image} alt="" />
              </div>
              <div className='ProfileBottomBlockDescription'>
                <p className='name'>{item.name}</p>
                <span className='categoryName' style={{ color: `${
                  item.rarity === 'Запрещённое' ? '#7257a8' :
                  item.rarity === 'Промышленное качество' ? '#33687e' :
                  item.rarity === 'Тайное' ? '#7f3535' :
                  item.rarity === 'Ширпотреб' ? '#307d58' :
                  item.rarity === 'Армейское качество' ? '#33687e' :
                  item.rarity === 'экстраординарного типа' ? '#7c842d': 
                  item.rarity === 'Засекреченное' ? '#7f357b' : ''}`}}
                >{item.rarity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
