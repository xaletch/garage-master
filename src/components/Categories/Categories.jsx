import React, { useEffect, useState } from 'react'

import './Categories.scss'
import { useGetCasesQuery } from '../../redux/cases/cases';
import { useDispatch, useSelector } from 'react-redux';

import { setCaseItems, setSelectedCategory } from '../../redux/slices/categoriesSlice';

export const Categories = () => {
  const { data: categoryCases, isSuccess } = useGetCasesQuery();
  const [category, setCategory] = useState([]);

  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.categorySlice.selectedCategory);

  useEffect(() => {
    if (isSuccess) {
      const categories = categoryCases?.data.cases;
      if (categories) {
        const categoriesWithAll = [{ category_name: "Все кейсы"}, ...categories];
        setCategory(categoriesWithAll);
        
        if (selectedCategory === "Все кейсы") {
          dispatch(setCaseItems(categories));
        } else {
          const filteredCases = categories.filter(category => category.category_name === selectedCategory);
          dispatch(setCaseItems(filteredCases));
        }
      }
    }
  }, [isSuccess, selectedCategory]);

  const handleSelectCategory = (name) => {
    dispatch(setSelectedCategory(name));
  };

  return (
    <div className='categories'>
      {/* <div className='wrapper'> */}
        <ul className='categoriesList'>
          {category.slice(0, 9).map((item, index) => (
            <li className={`item ${selectedCategory === item.category_name ? 'active' : ''}`} key={index} onClick={() => handleSelectCategory(item.category_name)}>{item.category_name}</li>
          ))}
        </ul>
      {/* </div> */}
    </div>
  )
}
