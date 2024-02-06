import React, { useState, useRef, useEffect } from 'react';

import About from '../components/About/About';
import AllWinner from '../components/AllWinner/AllWinner';
import { AllCases } from '../components/AllCases/AllCases.jsx';
import { Categories } from '../components/Categories/Categories.jsx';

import { useGetCasesQuery } from '../redux/cases/cases';
import { useSelector } from 'react-redux'

export const Home = () => {
    const { data: categoryCases, isSuccess, isLoading } = useGetCasesQuery();
    const [category, setCategory] = useState([]);
    const [scrollPosition, setScrollPosition] = useState(0);
    const selectedCategory = useSelector(state => state.categorySlice.selectedCategory);

    const categoryRefs = useRef({});

    useEffect(() => {
        if (isSuccess) {
            const categories = categoryCases?.data.cases;
            if (categories) {
                const categoriesWithAll = [...categories];
                setCategory(categoriesWithAll);
            }
        }
    }, [isSuccess, selectedCategory]);

    // обратный скролл после выхода со страницы кейса
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const savedScrollPosition = localStorage.getItem('scrollPosition');
        if (savedScrollPosition) {
            window.scrollTo(0, parseInt(savedScrollPosition));
            localStorage.removeItem('scrollPosition');
        }
      }, []);

    return (
        <>
            <Categories
                isLoading={isLoading}
                categoryRefs={categoryRefs}
                category={category}
            />

            {/* РАЗДАЧИ */}
            <AllWinner />

            <AllCases
            scrollPosition={scrollPosition}
                categoryCases={categoryCases}
                isLoading={isLoading}
                categoryRefs={categoryRefs}
            />
            
            {/* <FreeCase />
            <CasesByRarity />
            <FreeСase /> */}
            
            {/* КЕЙСЫ, КОНТРАКТЫ, АПРГРЕЙДЫ, ПОЛЬЗОВАТЕЛЕЙ, ОНЛАЙН */}
            {/* <About /> */}
        </>
    )
}
