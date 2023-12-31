import React, { useEffect, useState } from 'react';
import './Header.scss';
import link_img from '../../img/link_img';
import { Link } from 'react-router-dom';

import { useGetUserQuery } from '../../redux/cases/cases';

export default function Header({setHeaderOpen, setLogInOpen,HeaderOpen }) {
  const [follower, setFollower] = useState(16900);
  const [userData, setUserData] = useState(null);
  const { data, isFetching } = useGetUserQuery(null);

  useEffect(() => {
    if (data && !isFetching) {
      setUserData(data?.data?.profile);
      console.log('update')
    }
  }, [isFetching]);

  const isAuth = document.cookie?.split('; ').find(row => row?.startsWith('access_token='));

  return (
    <>
      <div className='Header'>
        <div className='main mainWidht'>
        <nav>
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
            {userData?.balance &&
              <div className="block wallet">
                <div className="ico">
                  <img src={link_img.wallet} alt="" />
                </div>
                <p>
                  <span className="title">{userData?.balance} руб.</span>
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
                    <span className="follower">{userData?.name}</span>
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
