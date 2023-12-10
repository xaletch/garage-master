import React, { useState } from 'react';

import './LogIn.scss';
import link_img from '../../img/link_img';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister } from '../../redux/slices/registration';
import { fetchAuth } from '../../redux/slices/auth';
import api from '../../http/axios';

export default function LogIn({ LogInOpen, setLogInOpen }) {
    const dispatch = useDispatch();

    const [NavActive, setNavActive] = useState('logIn');
    
    // Auth
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState();

    const handleSubmitAuth = async (e) => {
        e.preventDefault();
        try {
            const data = { phone, password };
            const loginData = await dispatch(fetchAuth(data));
            console.log(loginData);
      
            if ('access_token' in loginData.payload.data) {
                window.localStorage.setItem('access_token', loginData.payload.data.access_token);
                setLogInOpen(false);
            }
          }
          catch (err) {
            console.log('', err)
          }
    }

    // REGISTRATION
    const [reqPhone, setRegPhone] = useState('');
    const [reqPassword, setRegPassword] = useState('');
    const [reqPasswordConfirmation, setRegPasswordConfirmation] = useState('');
    const [menuCode, setMenuCode] = useState(false);
    const [code, setCode] = useState('');

    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        // try {
            const data = { phone: reqPhone, password: reqPassword, password_confirmation: reqPasswordConfirmation };
            const registerData = await dispatch(fetchRegister(data));
            console.log(registerData);
            
            if (!registerData?.error) {
                setLogInOpen(false);
                setMenuCode(true);
            }
        // }
        //   catch (err) {
            // console.log('Данное имя или логин уже используется другим пользователем: \n', err)
            // setLogInOpen(true);
        //   }
    };

    const session_id = useSelector((state) => state.registration?.data?.data?.session_id);
    const handleSubmitCode = async (e) => {
        e.preventDefault();

        try {
            const data = { session_id: session_id, code: code }
            const { response } = await api('/api/v1/account/signup-confirm', data);

            console.log(response);
        }
        catch (err) {
            console.log('Неверный код');
        }
    }

    return (
        <div className={`LogIn ${LogInOpen ? 'open' : ''}`} >
            {NavActive === 'reg' ?
                <div className="main">
                    <div className="nav">
                        <button onClick={() => setNavActive('logIn')} className={NavActive == 'logIn' ? 'active' : ''} style={{cursor: 'pointer'}}>Вход</button>
                        <button onClick={() => setNavActive('reg')} className={NavActive == 'reg' ? 'active' : ''} style={{cursor: 'pointer'}}>Регистрация</button>
                        <hr />
                    </div>
                    <form onSubmit={handleSubmitRegister}>
                        <input className='lol' value={reqPhone} onChange={(e) => setRegPhone(e.target.value)} placeholder='Номер телефона' type="tel" />
                        <input className='lol' value={reqPassword} onChange={(e) => setRegPassword(e.target.value)} placeholder='Пароль' type="password" />
                        <input className='lol' value={reqPasswordConfirmation} onChange={(e) => setRegPasswordConfirmation(e.target.value)} placeholder='Подтверждение пароля' type="password" />
                        <p>Сложно сказать, почему независимые государства призывают нас к новым свершениям, которые, в свою очередь, должны быть преданы <span className="orange">персональных данных.</span></p>
                        <label className='politica' htmlFor="politica"><input type="checkbox" id='politica' /> Я согласен получать информацию об акция по электронной почте</label>
                        <button className="orangeBtn" type='submit'>Зарегистрироваться</button>
                    </form>
                    <button className='exit' onClick={(e) => setLogInOpen(false)}><img src={link_img.close} /></button>
                </div>
                :
                NavActive === 'passLow' ?
                    <div className="main passLow">
                        <h2>Восстановление пароля</h2>
                        <p>Укажите адрес электронной почты</p>
                        <form>
                            <input className='lol' placeholder='Номер телефона' type="tel" />
                            <button className="orangeBtn" type='submit'>Получить ссылку на почту</button>
                        </form>
                        <button className='exit' onClick={e => { setLogInOpen(false); setNavActive('reg') }}><img src={link_img.close} /></button>
                    </div>
                    :
                    <div className="main">
                        <div className="nav">
                            <button onClick={() => setNavActive('logIn')} className={NavActive == 'logIn' ? 'active' : ''} style={{cursor: "pointer"}}>Вход</button>
                            <button onClick={() => setNavActive('reg')} className={NavActive == 'reg' ? 'active' : ''} style={{cursor: "pointer"}}>Регистрация</button>
                            <hr />
                        </div>
                        <form onSubmit={handleSubmitAuth} >
                            <input className='lol' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Номер телефона' type="tel" />
                            <input className='lol' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Пароль' type="password" />
                            <p onClick={() => setNavActive('passLow')}><span className='orange' style={{cursor: "pointer"}}>Забыли пароль?</span></p>
                            <button className="orangeBtn" type='submit'>Вход</button>
                        </form>
                        <button className='exit' onClick={e => setLogInOpen(false)}><img src={link_img.close} /></button>
                    </div>
            }
            {menuCode &&
                <div className="main">
                    <form onSubmit={handleSubmitCode}>
                        <p className='code'>Мы отправили СМС с кодом подтверждения на ваш номер телефона. Пожалуйста, введите данный код ниже</p>
                        <input className='lol' type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder='Код из СМС'/>
                        <button className="orangeBtn" type="submit">Подтвердить</button>
                    </form>
                </div>
            }
        </div>
    )
}
