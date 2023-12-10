import React, { useState } from 'react';

import './LogIn.scss';
import link_img from '../../img/link_img';

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRegister } from '../../redux/slices/registration';
import { fetchAuth } from '../../redux/slices/auth';
import api from '../../http/axios';

export default function LogIn({ LogInOpen, setLogInOpen }) {
    const dispatch = useDispatch();

    const [NavActive, setNavActive] = useState('logIn');

    const [incorrect, setIncorrect] = useState();

    // AUTH
    const {
        register: registerAuth,
        handleSubmit: handleSubmitAuth,
        formState: { errors: errorsAuth, isValid: isValidAuth },
    } = useForm({
        defaultValues: {
            phone: "",
            password: "",
        },
        mode: "onSubmit",
    });

    const onSubmitAuth = async (values) => {
        try {
            const data = await dispatch(fetchAuth(values));

            if ('access_token' in data.payload.data) {
                window.localStorage.setItem('access_token', data.payload.data.access_token);
                setLogInOpen(false);
            }
    
            // console.log('VALUES: ', data);
        }
        catch (err) {
            console.log(err);
            setIncorrect('Неверный логин или пароль')
        }
    };

    // REGISTRATION
    const [menuCode, setMenuCode] = useState(false);
    const [code, setCode] = useState('');
    const [isRegistered, setRegistered] = useState('');
    const [isPasswordMatch, setPasswordMatch] = useState('');

    const {
        register: registerRegister,
        handleSubmit: handleSubmitRegister,
        formState: { errors: errorsRegister, isValid: isValidRegister },
    } = useForm({
        defaultValues: {
            phone: "",
            password: "",
            password_confirmation: "",
        },
        mode: "onSubmit",
    });

    const onSubmitRegister = async (values) => {
        try {
            const data = await dispatch(fetchRegister(values));
    
            if ('access_token' in data.payload.data) {
                window.localStorage.setItem('access_token', data.payload.data.access_token);
            }

            setMenuCode(true);
            setLogInOpen(false);
    
            // console.log('VALUES: ', values);
        }
        catch (err) {
            console.log('Произошла ошибка', err);
            setRegistered('Пользователь с таким номером телефона уже зарегистрирован');
        }

        if (values.password !== values.password_confirmation) {
            setPasswordMatch('Пароли не совпадают');
        } else {
            setPasswordMatch('');
        };
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
                    <form onSubmit={handleSubmitRegister(onSubmitRegister)}>
                        <input className='lol' placeholder='Номер телефона' type="tel" {...registerRegister('phone', { required: 'Укажите номер телефона', minLength: { value: 7, message: "Минимальная длина телефона 7 символов" }, maxLength: { value: 15, message: "Максимальная длина телефона 15 символов" }, })} />
                        {errorsRegister.phone && <label style={{color: 'red'}}>{errorsRegister.phone.message}</label>}
                        {isRegistered && <label style={{color: 'red'}}>{isRegistered}</label>}

                        <input className='lol' placeholder='Пароль' type="password" {...registerRegister('password', {required: 'Это поле обязательно', minLength: { value: 6, message: "Минимальная длина пароля 6 символов" }, })} />
                        {errorsRegister.password && <label style={{color: 'red'}}>{errorsRegister.password.message}</label>}
                        {isPasswordMatch && <label style={{color: 'red'}}>{isPasswordMatch}</label>}

                        <input className='lol' placeholder='Подтверждение пароля' type="password" {...registerRegister('password_confirmation', {required: 'Пароли должны совпадать', minLength: { value: 6, message: "Минимальная длина пароля 6 символов" }, })} />
                        {errorsRegister.password_confirmation && <label style={{color: 'red'}}>{errorsRegister.password_confirmation.message}</label>}
                        {isPasswordMatch && <label style={{color: 'red'}}>{isPasswordMatch}</label>}

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
                        <form onSubmit={handleSubmitAuth(onSubmitAuth)} >
                            <input className='lol' placeholder='Номер телефона' type="tel" {...registerAuth('phone', { required: 'Укажите номер телефона', minLength: { value: 7, message: "Минимальная длина телефона 7 символов" }, maxLength: { value: 15, message: "Максимальная длина телефона 15 символов" }, })}   />
                            {errorsAuth.phone && <label style={{color: 'red'}}>{errorsAuth.phone.message}</label>}
                            {incorrect && <label style={{color: 'red'}}>{incorrect}</label>}

                            <input className='lol' placeholder='Пароль' type="password" {...registerAuth('password', {required: 'Это поле обязательно', minLength: { value: 6, message: "Минимальная длина пароля 6 символов" }, })} />
                            {errorsAuth.password && <label style={{color: 'red'}}>{errorsAuth.password.message}</label>}
                            {incorrect && <label style={{color: 'red'}}>{incorrect}</label>}

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
