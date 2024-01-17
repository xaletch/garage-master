import React from 'react'

import './ProfileBottom.scss';

export const ProfileBottom = ({ image, id, name, price, rarity, status, setOpenSaleMenu, setItemId, setItemPrice, setWithdrawalId, setOpenWithdrawalItemMenu }) => {
  
  const handleSaleItem = (id) => {
    if (id) {
      setItemId(id);
      setItemPrice(price)
      setOpenSaleMenu(true);
    }
  };

  const handleWithdrawalItem = (id) => {
    if (id) {
      setWithdrawalId(id);
      setOpenWithdrawalItemMenu(true);
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
        <span className='status'
          style={{ color: `${
            rarity === 'Запрещённое' ? '#7257a8' :
            rarity === 'Промышленное качество' ? '#33687e' :
            rarity === 'Тайное' ? '#7f3535' :
            rarity === 'Ширпотреб' ? '#307d58' :
            rarity === 'Армейское качество' ? '#33687e' :
            rarity === 'экстраординарного типа' ? '#7c842d': 
            rarity === 'Засекреченное' ? '#7f357b' : ''}`
          }}
        >{status}</span>
        <div className={`statusSale ${status === 'Продан' || status === 'Вывод в процессе' || status === 'Выведен' ? 'sold' : ''}`}  onClick={status === 'Продан' || status === 'Вывод в процессе' || status === 'Выведен' ? null : () => handleSaleItem(id)}>{price} ₽ {status !== 'Продан' && status !== 'Вывод в процессе' ? <span>Продать</span> : ''}</div>
        <div className='withdraw' style={ status === 'Продан' || status === 'Вывод в процессе' || status === 'Выведен' ? {display: 'none'} : {display: 'flex'} } onClick={() => handleWithdrawalItem(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6.35028 8.42139L6.35028 0.560501L4.7102 0.560501L4.7102 8.42139L1.18978 4.90097L0.0302427 6.0605L5.53024 11.5605L11.0302 6.0605L9.87071 4.90097L6.35028 8.42139Z" fill="#FFF"/>
          </svg>
          <span>Вывести</span>
        </div>
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
