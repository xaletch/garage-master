import React from 'react'

export const Item = ({ rarity, image, caseImg, itemName, userImg, userName }) => {

  return (
    <div className='Drop'>
      <div className={`DropItem ${
        rarity === 'Запрещённое' ? 'purple' :
        rarity === 'Промышленное качество' ? 'blue' :
        rarity === 'Тайное' ? 'red' :
        rarity === 'Ширпотреб' ? 'green' :
        rarity === 'Армейское качество' ? 'blue' :
        rarity === 'экстраординарного типа' ? 'yellow': 
        rarity === 'Контрабанда' ? 'yellow' :
        rarity === 'Засекреченное' ? 'pink' : ''
      }`}>
        <div className='inner'>
          <img src={image} alt='winning' />
        </div>
      </div>
      <div className="DropInfo">
        <div className='Inner'>
          <div className="InfoCase">
            <img src={caseImg} alt="" />
            <p>{itemName}</p>
          </div>
          <div className="InfoUser">
            <img src={userImg} alt="" />
            <p>{userName}</p>         
          </div>
        </div>
      </div>
    </div>
  )
}
