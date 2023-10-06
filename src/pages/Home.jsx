import React from 'react';

import About from '../components/About/About';
import AllWinner from '../components/AllWinner/AllWinner';
import CasesByRarity from '../components/CasesByRarity/CasesByRarity';
import FreeСase from '../components/FreeKace/FreeСase';

export const Home = ({ setHeaderOpen }) => {
    return (
        <>
            <AllWinner setHeaderOpen={setHeaderOpen}/>
            <FreeСase />
            <CasesByRarity />
            <FreeСase />
            <About />
        </>
    )
}
