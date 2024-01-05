import React, { useState } from 'react'

import './ProfileBottom.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSaleItem, fetchUser, fetchUserItems } from '../../../redux/slices/user';

export const ProfileBottom = ({ image, id, name, price, rarity }) => {
  const dispatch = useDispatch();

  const handleSaleItem = (id) => {
    if (id) {
      alert(`Вы действительно хотите продать данный предмет за ${price}₽`);
      dispatch(fetchSaleItem(id));
      dispatch(fetchUser());
    }
  };

  return (
    <div className={`ProfileBottomCard ${
      rarity === 'Запрещённое' ? 'c1' :
      rarity === 'Промышленное качество' ? 'c2' :
      rarity === 'Тайное' ? 'c3' :
      rarity === 'Ширпотреб' ? 'c4' :
      rarity === 'Армейское качество' ? 'c5' :
      rarity === 'экстраординарного типа' ? 'c6': 
      rarity === 'Засекреченное' ? 'c7' : ''}`} onClick={() => handleSaleItem(id)}>
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
        <span className='categoryName'>{rarity}</span>
      </div>
    </div>
  )
}
