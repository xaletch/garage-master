import React from 'react'
import link_img from '../../../img/link_img'

export default function WinnerCard({color}) {
  return (
    <div className='WinnerCard'>
        <div className={`img ${
            color == '8b2ca5' ? 'c1' :
            color == '3092bb' ? 'c2' :
            color == 'c9405d' ? 'c3' :
            color == '1dd87e' ? 'c4' :
            color == 'de7422' ? 'c5' :
         ''
        }`}>
            <div className="border">
                <img src={link_img.gun} alt="" />
            </div>
        </div>
        <div className="user">
            <img className='avatar' src={link_img.userAvatar} alt="" />
            <h4 className='userName'>
                WhiteFoxxxx
                <span className='date'>26.8.2026</span>

            </h4>
        </div>
        <div className="item">
            <h4>AK-47</h4>
            <span>Убийство</span>
        </div>
        <p className="price"><span>13123</span> ₽</p>
        <span className="every">ежедневная</span>
    </div>
  )
}
