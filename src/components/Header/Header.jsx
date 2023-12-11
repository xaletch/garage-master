import React, { useState } from 'react';
import './Header.scss';
import link_img from '../../img/link_img';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

export default function Header({setHeaderOpen, setLogInOpen,HeaderOpen }) {
  const [follower, setFollower] = useState(16900);

  const isAuth = localStorage.getItem('access_token');

  // USER INFORMATION
  const userInfo = useSelector((state) => state.user?.data?.data.profile);

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
          <Link to={'/garage-master'} onClick={() => window.scrollTo(0, 0)}><img className='logoImg' src={link_img.logo} alt="" /></Link>
          <div className="navRight">
            {userInfo &&
              <div className="block wallet">
                <div className="ico">
                  <img src={link_img.wallet} alt="" />
                </div>
                <p>
                  <span className="title">{userInfo?.balance} руб.</span>
                  <span className="follower">Баланс</span>
                </p>
              </div>
            }
            {!isAuth 
            ?   
              <div className="block user" style={{cursor: "pointer"}}>
                <div className="ico">
                  <img src={link_img.user2} alt="" />
                </div>
                <p>
                  <span className="title" onClick={e => setLogInOpen(true)}>Вход/Регистрация</span>
                  <span className="follower">Личный кабинет</span>
                </p>
              </div>
            :
            // ЗДЕСЬ ССЫЛКА КОТОРАЯ ВЕДЕТ НА ПРОФИЛЬ ПОЛЬЗОВАТЕЛЯ
              <Link to={'/profile'} onClick={() => window.scrollTo(0, 0)}>
                <div className="block user" style={{cursor: "pointer"}}>
                  <div className="ico">
                    <img src={link_img.user2} alt="" />
                  </div>
                  <p>
                    <span className="title">Личный кабинет</span>
                    <span className="follower">{userInfo?.name}</span>
                  </p>
                </div>
              </Link>
            }
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
