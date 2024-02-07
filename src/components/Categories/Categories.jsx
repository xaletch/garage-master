import React, { useEffect, useState } from 'react'

import './Categories.scss'
import { useDispatch, useSelector } from 'react-redux';

import { setSelectedCategory } from '../../redux/slices/categoriesSlice';

export const Categories = ({ categoryRefs, category }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.categorySlice.selectedCategory);

  const handleSelectCategory = (name) => {
    dispatch(setSelectedCategory(name));
  };

  useEffect(() => {
    const selectedRef = categoryRefs.current[selectedCategory];
    if (selectedRef && selectedRef.current) {
      selectedRef.current.scrollIntoView({ behavior: "smooth" });
      const offset = selectedRef.current.offsetTop;
      window.scrollTo({ top: offset - 80, behavior: 'smooth' });
    }
  }, [selectedCategory]);

  return (
    <div className="categories">
      <ul className="categoriesList">
        {category.slice(0, 9).map((item, index) => (
          <li 
            className={`item ${selectedCategory === item.category_name ? 'active' : ''}`}
            key={index}
            onClick={() => handleSelectCategory(item.category_name)}
            ref={categoryRefs.current[item.category_name]}
          >
            {item.category_name}
          </li>
        ))}
      </ul>
    </div>
  );
};
