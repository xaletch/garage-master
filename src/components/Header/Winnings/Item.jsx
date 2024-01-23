import React from 'react'

export const Item = ({ rarity, itemImg }) => {
  return (
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
            <img src={itemImg} alt='winning' />
        </div>
    </div>
  )
}
