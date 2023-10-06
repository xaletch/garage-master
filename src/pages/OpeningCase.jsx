import React from 'react'
import { CaseOpen } from '../components/OpenCase/CaseOpen/CaseOpen'
import { ContentsCase } from '../components/OpenCase/ContentsCase/ContentsCase'
import { ReturnHomeButton } from '../components/ReturnHomeButton/ReturnHomeButton'

export const OpeningCase = () => {
    return (
        <div className='OpeningCase OpenCase'>
            <div className='main mainWidht'>
                <ReturnHomeButton/>
                <CaseOpen />
                <ContentsCase />
            </div>
        </div>
    )
}
