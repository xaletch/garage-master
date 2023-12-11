import React from 'react'

import './ContentsCase.scss';

export const ContentsCase = ({ items }) => {
  return (
    <div className='ContentsCase'>
      <h2>Содержимое кейса</h2>
      <div className='ContentCaseWrapper'>
        {items?.map((item, index) => (
          <div className={`ContentCaseItem c3`} key={index}>
            <div className="ContentCaseItemRing" style={{ border: `2px solid` }}>
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
