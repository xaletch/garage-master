import React from 'react'

export const ContentCaseItem = ({ image, name, rarity }) => {
  return (
    <div className={`ContentCaseItem ${
      rarity === 'Запрещённое' ? 'c1' :
      rarity === 'Промышленное качество' ? 'c2' :
      rarity === 'Тайное' ? 'c3' :
      rarity === 'Ширпотреб' ? 'c4' :
      rarity === 'Армейское качество' ? 'c5' :
      rarity === 'экстраординарного типа' ? 'c6': 
      rarity === 'Засекреченное' ? 'c7' : ''}
     `}>
        <div className="ContentCaseItemRing" style={{ border: `2px solid ${
          rarity === 'Запрещённое' ? '#9830b3' :
          rarity === 'Промышленное качество' ? '#3092bb' :
          rarity === 'Тайное' ? '#c9405d' :
          rarity === 'Ширпотреб' ? '#1dd87e' :
          rarity === 'Армейское качество' ? '#de7422' :
          rarity === 'экстраординарного типа' ? '#cbde22': 
          rarity === 'Засекреченное' ? '#4b22de' : ''
        }` }}>
            <img src={image} alt={name} />
        </div>
        <div className='ContentCaseItemDescription'>
            <p className='name'>{name}</p>
            <span className='categoryName'>{rarity}</span>
        </div>
    </div>
  )
}
