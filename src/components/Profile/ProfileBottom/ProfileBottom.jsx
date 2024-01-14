import React from 'react'

import './ProfileBottom.scss';

export const ProfileBottom = ({ image, id, name, price, rarity, status, setOpenSaleMenu, setItemId, setItemPrice }) => {
  
  const handleSaleItem = (id) => {
    if (id) {
      setItemId(id);
      setItemPrice(price)
      setOpenSaleMenu(true);
    }
  };

  return (
    <>
      <div className={`ProfileBottomCard ${
        rarity === 'Запрещённое' ? 'purple' :
        rarity === 'Промышленное качество' ? 'blue' :
        rarity === 'Тайное' ? 'red' :
        rarity === 'Ширпотреб' ? 'green' :
        rarity === 'Армейское качество' ? 'blue' :
        rarity === 'экстраординарного типа' ? 'yellow': 
        rarity === 'Засекреченное' ? 'pink' : ''}`}
      >
        <div className={`status ${status === 'Продан' ? 'sold' : ''}`}  onClick={status === 'Продан' ? null : () => handleSaleItem(id)}>{price} ₽ {status !== 'Продан' && <span>Продать</span>}</div>
        <div className={`ProfileCardInner ${
          rarity === 'Запрещённое' ? 'purple' :
          rarity === 'Промышленное качество' ? 'blue' :
          rarity === 'Тайное' ? 'red' :
          rarity === 'Ширпотреб' ? 'green' :
          rarity === 'Армейское качество' ? 'blue' :
          rarity === 'экстраординарного типа' ? 'yellow': 
          rarity === 'Засекреченное' ? 'pink' : ''}`}
        >
          <div className="ProfileBottomBlockRing" style={{ border: `2px solid ${
              rarity === 'Запрещённое' ? '#9830b3' :
              rarity === 'Промышленное качество' ? '#3092bb' :
              rarity === 'Тайное' ? '#db4343' :
              rarity === 'Ширпотреб' ? '#1dd87e' :
              rarity === 'Армейское качество' ? '#3092bb' :
              rarity === 'экстраординарного типа' ? '#cbde22': 
              rarity === 'Засекреченное' ? '#c9405d' : ''}`}}>
            <img src={image} alt="" />
          </div>
          <div className='ProfileBottomBlockDescription'>
            <p className='name'>{name}</p>
            <span className='categoryName' 
            style={{ color: `${
              rarity === 'Запрещённое' ? '#7257a8' :
              rarity === 'Промышленное качество' ? '#33687e' :
              rarity === 'Тайное' ? '#7f3535' :
              rarity === 'Ширпотреб' ? '#307d58' :
              rarity === 'Армейское качество' ? '#33687e' :
              rarity === 'экстраординарного типа' ? '#7c842d': 
              rarity === 'Засекреченное' ? '#7f357b' : ''}`}}
            >{rarity}</span>
          </div>
        </div>
      </div>
    </>
  )
}
