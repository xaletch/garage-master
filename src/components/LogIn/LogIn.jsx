import React, { useState } from 'react'
import './LogIn.scss'
import link_img from '../../img/link_img'
export default function LogIn({ LogInOpen, setLogInOpen }) {
    const [NavActive, setNavActive] = useState('logIn')
    return (
        <div className={`LogIn ${LogInOpen ? 'open' : ''}`} >
            {NavActive == 'reg' ?
                <div className="main">
                    <div className="nav">
                        <button onClick={() => setNavActive('logIn')} className={NavActive == 'logIn' ? 'active' : ''}>Вход</button>
                        <button onClick={() => setNavActive('reg')} className={NavActive == 'reg' ? 'active' : ''}>Регистрация</button>
                        <hr />
                    </div>
                    <input className='lol' placeholder='Email' type="email" />
                    <input className='lol' placeholder='Пароль' type="password" />
                    <input className='lol' placeholder='Подтверждение пароля' type="password" />
                    <p>Сложно сказать, почему независимые государства призывают нас к новым свершениям, которые, в свою очередь, должны быть преданы <span className="orange">персональных данных.</span></p>
                    <label className='politica' htmlFor="politica"><input type="checkbox" id='politica' /> Я согласен получать информацию об акция по электронной почте</label>
                    <button className="orangeBtn">Зарегистрироваться</button>
                    <button className='exit' onClick={e => setLogInOpen(false)}><img src={link_img.close} /></button>
                </div>
                :
                NavActive == 'passLow' ?
                    <div className="main passLow">
                        <h2>Восстановление пароля</h2>
                        <p>Укажите адрес электронной почты</p>
                        <input className='lol' placeholder='Email' type="email" />
                        <button className="orangeBtn">Получить ссылку на почту</button>
                        <button className='exit' onClick={e => { setLogInOpen(false); setNavActive('reg') }}><img src={link_img.close} /></button>
                    </div>
                    :
                    <div className="main">
                        <div className="nav">
                            <button onClick={() => setNavActive('logIn')} className={NavActive == 'logIn' ? 'active' : ''}>Вход</button>
                            <button onClick={() => setNavActive('reg')} className={NavActive == 'reg' ? 'active' : ''}>Регистрация</button>
                            <hr />
                        </div>
                        <input className='lol' placeholder='Email' type="email" />
                        <input className='lol' placeholder='Пароль' type="password" />
                        <buttom onClick={() => setNavActive('passLow')}><span className='orange'>Забыли пароль?</span></buttom>
                        <button className="orangeBtn">Вход</button>
                        <button className='exit' onClick={e => setLogInOpen(false)}><img src={link_img.close} /></button>
                    </div>
            }
        </div>
    )
}
