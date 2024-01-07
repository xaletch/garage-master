import React, { useEffect } from 'react';

import '../components/OpenCase/SelectedCase.scss';

import About from '../components/About/About';
import { ReturnHomeButton } from '../components/ReturnHomeButton/ReturnHomeButton';
import { Case } from '../components/OpenCase/CaseBlock/Case';
import { ContentsCase } from '../components/OpenCase/ContentsCase/ContentsCase';

import { useParams } from 'react-router-dom';
import { useGetCaseByUrlQuery } from '../redux/cases/cases';

export const SelectedCase = () => {
  const { url } = useParams();

  const { data: caseInfo, isLoading } = useGetCaseByUrlQuery(url);

  useEffect(() => {
    if (url) {
      window.scrollTo(0, 0);
    }
  }, [url]);

  if (isLoading) {
    return <h3 style={{marginTop: '400px', marginBottom: '400px', textAlign: 'center', fontSize: '24px'}}>Loading...</h3>;
  }

  return (
    <div className='SelectedCase'>
        <div className='main mainWidht'>
            <ReturnHomeButton name={caseInfo?.data?.name} />
            <Case name={caseInfo?.data.name} price={caseInfo?.data?.price} image={caseInfo?.data?.image} url={caseInfo?.data?.url} />
            <ContentsCase items={caseInfo?.data?.items}/>
            <About />
        </div>
    </div>
  )
}
