import React, { useState } from 'react'
import './Header.scss'
import link_img from '../../img/link_img'

export default function Header({setHeaderOpen, setLogInOpen,HeaderOpen }) {
  const [follower, setFollower] = useState(16900)
  return (
    <>
      <div className='Header'>
        <nav className='mainWidht'>
          <div className="massager">
            <div className="block vk">
              <div className="ico">
                <img src={link_img.vk} alt="" />
              </div>
              <p>
                <span className="title">ВКонтакте</span>
                <span className="follower"><img src={link_img.user} alt="" />{follower}</span>
              </p>
            </div>
            <div className="block inst">
              <div className="ico">
                <img src={link_img.instagram} alt="" />
              </div>
              <p>
                <span className="title">instagram</span>
                <span className="follower"><img src={link_img.user} alt="" />{follower}</span>
              </p>

            </div>
            <div className="block telegram">
              <div className="ico">
                <img src={link_img.telegram} alt="" />
              </div>
              <p>
                <span className="title">telegram</span>
                <span className="follower"><img src={link_img.user} alt="" />{follower}</span>
              </p>

            </div>
          </div>
          <img className='logoImg' src={link_img.logo} alt="" />
          <div className="navRight">
            <div className="block wallet">
              <div className="ico">
                <img src={link_img.wallet} alt="" />
              </div>
              <p>
                <span className="title">16 111 900 руб.</span>
                <span className="follower">Баланс</span>
              </p>
            </div>
            <div className="block user">
              <div className="ico">
                <img src={link_img.user2} alt="" />
              </div>
              <p>
                <span className="title" onClick={e => setLogInOpen(true)}>Вход/Регистрация</span>
                <span className="follower">Личный кабинет</span>
              </p>
            </div>
            <div className="language">
              Ru
            </div>
          </div>
        </nav>
      </div>
      <div onClick={()=>{setHeaderOpen(false)}} className={`HeaderMedia ${HeaderOpen?'open':''}`}>
        <div className="HeaderMediaTop mainWidht">
          <img src={link_img.logo} alt="" className="logo" />
          <h1>Меню</h1>
          <div className="massage">

            <div className="block vk">
              <div className="ico">
                <img src={link_img.vk} alt="" />
              </div>
            </div>
            <div className="block inst">
              <div className="ico">
                <img src={link_img.instagram} alt="" />
              </div>
            </div>
            <div className="block telegram">
              <div className="ico">
                <img src={link_img.telegram} alt="" />
              </div>
            </div>

          </div>
        </div>
        <div className="HeaderMediaBottom mainWidht">
          <div className="block">
            <h3>Кейсы</h3>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
          </div>
          <div className="block">
            <h3>Название раздела</h3>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
          </div>
          <div className="block">
            <h3>Кейсы</h3>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
          </div>
          <div className="block">
            <h3>Название раздела</h3>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
            <a href="#">Раритетные кейсы</a>
          </div>
        </div>
      </div>
    </>
  )
}
