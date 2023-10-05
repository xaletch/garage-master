import React from 'react'
import './Footer.scss'
import link_img from '../../img/link_img'
export default function Footer() {
  return (
    <div className='Footer'>
      <div className="mainWidht">
        <div className="companyName block">
          <img src={link_img.logo} alt="" />
          <p>2021 - 2023 GameBuilder </p>
        </div>
        <div className="block">
          <p><span className='orange'>Game Builder — Магазин кейсов CS:GO</span><br />
            На нашем сайте вы можете открыть различные кейсы CS:GO по самым
            выгодным ценам. Все обмены проходят
            в автоматическом режиме с помощью торговой площадки <span className="orange">MARKET.CSGO.COM</span> </p>
        </div>
        <div className="services block">
          <a href="#">О нашем сервисе</a>
          <a href="#">FAQ</a>
          <a href="#">Политика конфиденциальности</a>
        </div>
        <div className="pay block">
          <p>Способы оплаты:</p>
          <div className="imgs">
            <img src={link_img.visa} alt="" />
            <img src={link_img.masterCard} alt="" />
            <img src={link_img.qiwi} alt="" />
            <img src={link_img.webMoney} alt="" />

          </div>
        </div>
      </div>
    </div>
  )
}
