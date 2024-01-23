import React, { useState } from 'react'

import './Categories.scss'

const category = [
  {name: "Новинки и скидки", id: 1},
  {name: "По цветам", id: 2},
  {name: "По типу оружия", id: 3},
  {name: "По качеству", id: 4},
  {name: "По коллекциям", id: 5},
  {name: "Take-Drop", id: 6},
  {name: "Агенты и прочее", id: 7},
  {name: "Фарм кейсы", id: 8},
  {name: "Бонусные кейсы", id: 9}
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
