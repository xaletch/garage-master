import React, { useEffect } from 'react';

import '../components/OpenCase/SelectedCase.scss';

import About from '../components/About/About';
import { ReturnHomeButton } from '../components/ReturnHomeButton/ReturnHomeButton';
import { Case } from '../components/OpenCase/CaseBlock/Case';
import { ContentsCase } from '../components/OpenCase/ContentsCase/ContentsCase';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCase } from '../redux/slices/casesSlice';

export const SelectedCase = () => {
  const dispatch = useDispatch();
  const { url } = useParams();

  useEffect(() => {
    if (url) {
      dispatch(fetchCase(url));
      window.scrollTo(0, 0);
    }
  }, [url]);

  const caseInfo = useSelector((state) => state.cases.case);

  return (
    <div className='SelectedCase'>
        <div className='main mainWidht'>
            <ReturnHomeButton name={caseInfo?.name} />
            <Case name={caseInfo?.name} price={caseInfo?.price} image={caseInfo?.image} />
            <ContentsCase items={caseInfo?.items}/>
            <About />
        </div>
    </div>
  )
}
