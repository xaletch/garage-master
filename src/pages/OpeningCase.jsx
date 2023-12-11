import React from 'react'
import { CaseOpen } from '../components/OpenCase/CaseOpen/CaseOpen'
import { ContentsCase } from '../components/OpenCase/ContentsCase/ContentsCase'
import { ReturnHomeButton } from '../components/ReturnHomeButton/ReturnHomeButton'

import { useSelector } from 'react-redux';


export const OpeningCase = () => {

    const caseInfo = useSelector((state) => state.cases.case);

    return (
        <div className='OpeningCase OpenCase'>
            <div className='main mainWidht'>
                <ReturnHomeButton name={caseInfo?.name} />
                <CaseOpen />
                <ContentsCase items={caseInfo?.items} />
            </div>
        </div>
    )
}
