import React, { useState } from 'react'

import './Categories.scss'

const category = [
  {name: "Все кейсы", id: 1},
  {name: "Фирменые", id: 2},
  {name: "Черная пятница", id: 3},
  {name: "С игры", id: 4},
  {name: "Новинки и скидки", id: 5},
  {name: "Агенты и прочее", id: 6},
];

export const Categories = () => {
  const [selectCategory, setSelectCategory] = useState(1);

  const handleSelectCategory = (id) => {
    setSelectCategory(id)
  }

  return (
    <div className='categories'>
      <ul className='categoriesList'>
        {category.map((item, index) => (
          <li className={`item ${selectCategory === item.id ? 'active' : ''}`} key={index} onClick={() => handleSelectCategory(item.id)}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
