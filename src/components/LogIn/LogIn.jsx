import React, { useState, useEffect } from 'react';

import './LogIn.scss';
import link_img from '../../img/link_img';

import { useForm } from 'react-hook-form';

import { CodeConfirmation } from './CodeConfirmation';
import { useAddRegistrationMutation, useFetchAuthMutation, useGetUserQuery } from '../../redux/cases/cases';

export default function LogIn({ LogInOpen, setLogInOpen }) {
    const [NavActive, setNavActive] = useState('logIn');
    const [menuCode, setMenuCode] = useState(false);
    const [incorrect, setIncorrect] = useState('');
    const [sessionId, setSessionId] = useState();


    const { refetch: refetchUserData, error: errorUserData } = useGetUserQuery(null);

    const [fetchAuth] = useFetchAuthMutation();
    const [addRegistration] = useAddRegistrationMutation();

    // AUTH
    const {
        register: registerAuth,
        handleSubmit: handleSubmitAuth,
        formState: { errors: errorsAuth },
    } = useForm({
        defaultValues: {
            phone: "",
            password: "",
        },
        mode: "onSubmit",
    });

    const setCookieWithExpiration = (cookieName, cookieValue, expHours) => {
        const date = new Date();
        date.setTime(date.getTime() + (expHours * 60 * 60 * 1000));
        const expires = date.toUTCString();
        document.cookie = `${cookieName}=${cookieValue}; expires=${expires}; path=/;`;
    }

    const onSubmitAuth = async (values) => {
        try {
            const data = await fetchAuth(values);

            if (data.data.data.access_token) {
              window.localStorage.setItem('access_token', data.data.data.access_token);
              setCookieWithExpiration('access_token', data.data.data.access_token, 24);
              setLogInOpen(false);
            } else {
              setIncorrect('Неверный логин или пароль')
            }
        }
        catch (err) {
            console.log(err);
            setIncorrect('Неверный логин или пароль')
        }
    };

    // REGISTRATION
    const [isRegistered, setRegistered] = useState('');
    const [isPasswordMatch, setPasswordMatch] = useState('');

    const {
        register: registerRegister,
        handleSubmit: handleSubmitRegister,
        formState: { errors: errorsRegister },
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
            const data = await addRegistration(values);

            if (data.data.data.session_id) {
                setLogInOpen(false);
                setMenuCode(true);
                setSessionId(data.data.data.session_id);
            }
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
    const isAuth = document.cookie?.split('; ').find(row => row?.startsWith('access_token='));
    useEffect(() => {
        setTimeout(() => {
            refetchUserData();
        }, 500);
    }, [isAuth]);

    return (
        <>
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

                            {/* <p onClick={() => setNavActive('passLow')}><span className='orange' style={{cursor: "pointer"}}>Забыли пароль?</span></p> */}
                            <button className="orangeBtn" type='submit'>Вход</button>
                        </form>
                        <button className='exit' onClick={e => setLogInOpen(false)}><img src={link_img.close} /></button>
                    </div>
                }
            </div>
            {menuCode && <CodeConfirmation menuCode={menuCode} setMenuCode={setMenuCode} sessionId={sessionId} />}
        </>
    )
}
