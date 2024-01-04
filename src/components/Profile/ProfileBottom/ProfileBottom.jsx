import React from 'react'

import './ProfileBottom.scss';

export const ProfileBottom = ({ items }) => {
  
  return (
    <div className='ProfileBottom'>
      {items?.map((item, index) => (
        <div className={`ProfileBottomCard c3`} key={index}>
          <div className="ProfileBottomBlockRing" style={{ border: `2px solid` }}>
            <img src={item.image} alt="" />
          </div>
          <div className='ProfileBottomBlockDescription'>
            <p className='name'>{item.name}</p>
            <span className='categoryName'>{item.rarity}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
