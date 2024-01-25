import React from 'react'

export const Item = ({ rarity, image }) => {
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
            <img src={image} alt='winning' />
        </div>
    </div>
  )
}
