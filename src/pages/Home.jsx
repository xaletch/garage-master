import React from 'react';

import About from '../components/About/About';
import AllWinner from '../components/AllWinner/AllWinner';
import { AllCases } from '../components/AllCases/AllCases.jsx';
import { Categories } from '../components/Categories/Categories.jsx';

export const Home = ({ setHeaderOpen }) => {
    return (
        <>
            <Categories />

            {/* РАЗДАЧИ */}
            <AllWinner setHeaderOpen={setHeaderOpen}/>

            <AllCases />
            {/* <FreeCase />
            <CasesByRarity />
            <FreeСase /> */}
            
            {/* КЕЙСЫ, КОНТРАКТЫ, АПРГРЕЙДЫ, ПОЛЬЗОВАТЕЛЕЙ, ОНЛАЙН */}
            {/* <About /> */}
        </>
    )
}
