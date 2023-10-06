import React from 'react';

import '../components/OpenCase/OpenCase.scss';

import About from '../components/About/About';
import { ReturnHomeButton } from '../components/ReturnHomeButton/ReturnHomeButton';
import { Case } from '../components/OpenCase/CaseBlock/Case';
import { ContentsCase } from '../components/OpenCase/ContentsCase/ContentsCase';

export const OpenCase = () => {
  return (
    <div className='OpenCase'>
        <div className='main mainWidht'>
            <ReturnHomeButton />
            <Case />
            <ContentsCase />
            <About />
        </div>
    </div>
  )
}
