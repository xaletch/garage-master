import React, { useEffect } from 'react'
import { CaseOpen } from '../components/OpenCase/CaseOpen/CaseOpen'
import { ContentsCase } from '../components/OpenCase/ContentsCase/ContentsCase'
import { ReturnHomeButton } from '../components/ReturnHomeButton/ReturnHomeButton'

import { useParams } from 'react-router-dom';
import { useGetCaseByUrlQuery } from '../redux/cases/cases';

export const OpeningCase = () => {
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
        <div className='OpeningCase OpenCase'>
            <div className='main mainWidht'>
                <div className='CaseOpen'>
                    <ReturnHomeButton name={caseInfo?.data.name} />
                    <CaseOpen name={caseInfo?.data.name} url={caseInfo?.data.url} item={caseInfo?.data.items} isLoading={isLoading} />
                    <ContentsCase items={caseInfo?.data.items} />
                </div>
            </div>
        </div>
    )
}
