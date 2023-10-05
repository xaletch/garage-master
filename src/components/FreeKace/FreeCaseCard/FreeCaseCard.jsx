import React from 'react'
import link_img from '../../../img/link_img'

export default function FreeCaseCard({color}) {
  return (
    <div className={`FreeCaseCard ${color == '9830b3' ? 'c1' :
        color == '3092bb' ? 'c2' :
        color == 'c9405d' ? 'c3' :
        color == '1dd87e' ? 'c4' :
        color == 'de7422' ? 'c5' :
          ''}
      `}>
      <div className="price"><span>0</span> ₽</div>
      <img src={link_img.case_1} alt="" />
      <p className="title">Бесплатный кейс #1</p>
    </div>
  )
}
