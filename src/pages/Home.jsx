import React, { useEffect } from 'react';

import About from '../components/About/About';
import AllWinner from '../components/AllWinner/AllWinner';
import CasesByRarity from '../components/CasesByRarity/CasesByRarity';
import FreeСase from '../components/FreeKace/FreeСase';

import { useDispatch } from 'react-redux';
import { fetchCases } from '../redux/slices/casesSlice.js';
import { AllCases } from '../components/AllCases/AllCases.jsx';


export const Home = ({ setHeaderOpen }) => {
    const dispatch = useDispatch();

    // получение кейсов
    useEffect(() => {
        dispatch(fetchCases());
    }, [dispatch]);
      

    return (
        <>
            <AllWinner setHeaderOpen={setHeaderOpen}/>
            <AllCases />
            <FreeСase />
            {/* <CasesByRarity /> */}
            {/* <FreeСase /> */}
            <About />
        </>
    )
}
