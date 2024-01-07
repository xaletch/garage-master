import React from 'react';

import About from '../components/About/About';
import AllWinner from '../components/AllWinner/AllWinner';
import { AllCases } from '../components/AllCases/AllCases.jsx';


export const Home = ({ setHeaderOpen }) => {
    return (
        <>
            <AllWinner setHeaderOpen={setHeaderOpen}/>
            <AllCases />
            {/* <FreeСase /> */}
            {/* <CasesByRarity /> */}
            {/* <FreeСase /> */}
            <About />
        </>
    )
}
