import React from 'react';

import '../../ContentsCase/ContentsCase.scss';

import link_img from '../../../../img/link_img';

import { ContentCaseItem } from '../../ContentsCase/ContentCaseItem';

export const CaseOpens = () => {
  return (
    <div className='CaseOpens'>
        <div className='CaseOpensContent'>
            <ContentCaseItem img={link_img.gun} color={'9830b3'}/>
            <ContentCaseItem img={link_img.gun} color={'9830b3'}/>
            <ContentCaseItem img={link_img.gun} color={'3092bb'}/>
            <ContentCaseItem img={link_img.gun} color={'c9405d'}/>
            <ContentCaseItem img={link_img.gun} color={'9830b3'}/>
            <ContentCaseItem img={link_img.gun} color={'9830b3'}/>
            <ContentCaseItem img={link_img.gun} color={'1dd87e'}/>
            <ContentCaseItem img={link_img.gun} color={'9830b3'}/>
            <ContentCaseItem img={link_img.gun} color={'de7422'}/>
            <ContentCaseItem img={link_img.gun} color={'3092bb'}/>
            <ContentCaseItem img={link_img.gun} color={'c9405d'}/>
            <ContentCaseItem img={link_img.gun} color={'9830b3'}/>
        </div>
        <div className='arrows'>
            <div className='arrowsTop'>
                <img src={link_img.case_open_arrow_top} alt=''/>
            </div>
            <div className='arrowsBottom'>
                <img src={link_img.case_open_arrow_bottom} alt=''/>
            </div>
        </div>
        {/* <div className='winnings'>
            <div className='CaseShadow'></div>
            <img src={link_img.winnings} alt=''/>
        </div> */}
    </div>
  )
}
