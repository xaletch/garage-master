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
      rarity === 'Запрещённое' ? 'c1' :
      rarity === 'Промышленное качество' ? 'c2' :
      rarity === 'Тайное' ? 'c3' :
      rarity === 'Ширпотреб' ? 'c4' :
      rarity === 'Армейское качество' ? 'c5' :
      rarity === 'экстраординарного типа' ? 'c6': 
      rarity === 'Засекреченное' ? 'c7' : ''}`}>
      <div className={`status ${status === 'Продан' ? 'sold' : ''}`}  onClick={status === 'Продан' ? null : () => handleSaleItem(id)}>{price} ₽ {status !== 'Продан' && <span>Продать</span>}</div>
      <div className="ProfileBottomBlockRing" style={{ border: `2px solid ${
          rarity === 'Запрещённое' ? '#9830b3' :
          rarity === 'Промышленное качество' ? '#3092bb' :
          rarity === 'Тайное' ? '#c9405d' :
          rarity === 'Ширпотреб' ? '#1dd87e' :
          rarity === 'Армейское качество' ? '#de7422' :
          rarity === 'экстраординарного типа' ? '#cbde22': 
          rarity === 'Засекреченное' ? '#4b22de' : ''}`}}>
        <img src={image} alt="" />
      </div>
      <div className='ProfileBottomBlockDescription'>
        <p className='name'>{name}</p>
        <span className='categoryName' 
        style={{ color: `${
          rarity === 'Запрещённое' ? '#7257a8' :
          rarity === 'Промышленное качество' ? '#5788a8' :
          rarity === 'Тайное' ? '#c9405d' :
          rarity === 'Ширпотреб' ? '#1dd87e' :
          rarity === 'Армейское качество' ? '#de7422' :
          rarity === 'экстраординарного типа' ? '#cbde22': 
          rarity === 'Засекреченное' ? '#744ff8' : ''}`}}
        >{rarity}</span>
      </div>
    </div>
    </>
  )
}
