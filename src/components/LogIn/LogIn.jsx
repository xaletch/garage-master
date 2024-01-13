import React, { useState, useEffect } from 'react';

import './LogIn.scss';

import { useForm, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css';

import { CodeConfirmation } from './CodeConfirmation';
import { useAddRegistrationMutation, useFetchAuthMutation, useFetchSteamLoginUrlMutation, useGetUserQuery } from '../../redux/cases/cases';

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
        control: controlAuth,
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
        control: controlRegister,
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

    // REGISTER STEAM

    // const [fetchLoginSteam] = useFetchLoginSteamMutation()
    const [fetchSteamLoginUrl] = useFetchSteamLoginUrlMutation();
    const [steamLoginErr, setSteamLoginErr] = useState();

    const handleSteamLogin = async () => {
        try {
            const { data } = await fetchSteamLoginUrl({ type: "steam" });

            window.open(data.data.redirect_url);
        } catch (error) {
            setSteamLoginErr('Неудалось получить ссылку')
        }
    };

    return (
        <>
            <div className={`LogIn ${LogInOpen ? 'open' : ''}`} onClick={() => setLogInOpen(false)}>
                {NavActive === 'reg' ?
                    <div className="main" onClick={(e) => e.stopPropagation()}>
                        <h3>Регистрация</h3>
                        <form onSubmit={handleSubmitRegister(onSubmitRegister)}>
                            <div className='inputWrapper'>
                                <div className='inputBlock'>
                                    <Controller
                                        name="phone"
                                        control={controlRegister}
                                        rules={{
                                            required: 'Укажите номер телефона',
                                            minLength: {
                                                value: 7,
                                                message: "Минимальная длина телефона 7 символов"
                                            },
                                            maxLength: {
                                                value: 15,
                                                message: "Максимальная длина телефона 15 символов"
                                            },
                                        }}
                                        render={({ field: { onChange, onBlur, value, ref } }) => (
                                            <PhoneInput
                                                international
                                                defaultCountry="RU"
                                                placeholder='Номер телефона'
                                                value={value}
                                                onChange={onChange}
                                                onBlur={onBlur}
                                                ref={ref}
                                                className="lol"
                                            />
                                        )}
                                    />
                                </div>
                                {/* <input className='lol' placeholder='Номер телефона' type="tel" {...registerRegister('phone', { required: 'Укажите номер телефона', minLength: { value: 7, message: "Минимальная длина телефона 7 символов" }, maxLength: { value: 15, message: "Максимальная длина телефона 15 символов" }, })} /> */}
                                {errorsRegister.phone && <label style={{color: 'red'}}>{errorsRegister.phone.message}</label>}
                                {isRegistered && <label style={{color: 'red'}}>{isRegistered}</label>}
                            </div>

                            <div className='inputWrapper'>
                                <div className='inputBlock'>
                                    <input className='lol' placeholder='Пароль' type="password" {...registerRegister('password', {required: 'Это поле обязательно', minLength: { value: 6, message: "Минимальная длина пароля 6 символов" }, })} />
                                </div>
                                {errorsRegister.password && <label style={{color: 'red'}}>{errorsRegister.password.message}</label>}
                                {isPasswordMatch && <label style={{color: 'red'}}>{isPasswordMatch}</label>}
                            </div>

                            <div className='inputWrapper'>
                                <div className='inputBlock'>
                                    <input className='lol' placeholder='Подтверждение пароля' type="password" {...registerRegister('password_confirmation', {required: 'Пароли должны совпадать', minLength: { value: 6, message: "Минимальная длина пароля 6 символов" }, })} />
                                </div>
                                {errorsRegister.password_confirmation && <label style={{color: 'red'}}>{errorsRegister.password_confirmation.message}</label>}
                                {isPasswordMatch && <label style={{color: 'red'}}>{isPasswordMatch}</label>}
                            </div>

                            <p>Сложно сказать, почему независимые государства призывают нас к новым свершениям, которые, в свою очередь, должны быть преданы <span className="orange">персональных данных.</span></p>
                            {/* <label className='politica' htmlFor="politica"><input type="checkbox" id='politica' /> Я согласен получать информацию об акция по электронной почте</label> */}
                            <button className="orangeBtn" type='submit'>Зарегистрироваться</button>
                        </form>
                        <div className='loginBottom'>
                            <div className='logBtn' onClick={() => setNavActive('logIn')}>Уже зарегистрированы? <span>Войти</span></div>
                        </div>
                        <button className='exit' onClick={e => setLogInOpen(false)}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M8.227 6.9951L13.7355 1.49475C13.9002 1.33009 13.9926 1.10676 13.9926 0.873887C13.9926 0.641017 13.9002 0.417685 13.7355 0.253021C13.5709 0.0883569 13.3475 -0.00415039 13.1147 -0.00415039C12.8819 -0.00415039 12.6586 0.0883569 12.4939 0.253021L6.99414 5.76212L1.49438 0.253021C1.32973 0.0883569 1.10642 -0.00415018 0.873577 -0.00415018C0.640732 -0.00415018 0.417423 0.0883569 0.252777 0.253021C0.0881303 0.417685 -0.00436697 0.641017 -0.00436697 0.873887C-0.00436697 1.10676 0.0881303 1.33009 0.252777 1.49475L5.76128 6.9951L0.252777 12.4955C0.170824 12.5767 0.105776 12.6735 0.0613857 12.78C0.0169952 12.8866 -0.00585938 13.0009 -0.00585938 13.1163C-0.00585938 13.2318 0.0169952 13.3461 0.0613857 13.4526C0.105776 13.5592 0.170824 13.6559 0.252777 13.7372C0.33406 13.8191 0.430766 13.8842 0.537316 13.9286C0.643865 13.973 0.75815 13.9958 0.873577 13.9958C0.989004 13.9958 1.10329 13.973 1.20984 13.9286C1.31639 13.8842 1.41309 13.8191 1.49438 13.7372L6.99414 8.22809L12.4939 13.7372C12.5752 13.8191 12.6719 13.8842 12.7784 13.9286C12.885 13.973 12.9993 13.9958 13.1147 13.9958C13.2301 13.9958 13.3444 13.973 13.451 13.9286C13.5575 13.8842 13.6542 13.8191 13.7355 13.7372C13.8175 13.6559 13.8825 13.5592 13.9269 13.4526C13.9713 13.3461 13.9941 13.2318 13.9941 13.1163C13.9941 13.0009 13.9713 12.8866 13.9269 12.78C13.8825 12.6735 13.8175 12.5767 13.7355 12.4955L8.227 6.9951Z" fill="#413D3D"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                :
                NavActive === 'passLow' ?
                    <div className="main passLow" onClick={(e) => e.stopPropagation()}>
                        <h2>Восстановление пароля</h2>
                        <p>Укажите адрес электронной почты</p>
                        <form>
                            <input className='lol' placeholder='Номер телефона' type="tel" />
                            <button className="orangeBtn" type='submit'>Получить ссылку на почту</button>
                        </form>
                        <button className='exit' onClick={e => setLogInOpen(false)}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M8.227 6.9951L13.7355 1.49475C13.9002 1.33009 13.9926 1.10676 13.9926 0.873887C13.9926 0.641017 13.9002 0.417685 13.7355 0.253021C13.5709 0.0883569 13.3475 -0.00415039 13.1147 -0.00415039C12.8819 -0.00415039 12.6586 0.0883569 12.4939 0.253021L6.99414 5.76212L1.49438 0.253021C1.32973 0.0883569 1.10642 -0.00415018 0.873577 -0.00415018C0.640732 -0.00415018 0.417423 0.0883569 0.252777 0.253021C0.0881303 0.417685 -0.00436697 0.641017 -0.00436697 0.873887C-0.00436697 1.10676 0.0881303 1.33009 0.252777 1.49475L5.76128 6.9951L0.252777 12.4955C0.170824 12.5767 0.105776 12.6735 0.0613857 12.78C0.0169952 12.8866 -0.00585938 13.0009 -0.00585938 13.1163C-0.00585938 13.2318 0.0169952 13.3461 0.0613857 13.4526C0.105776 13.5592 0.170824 13.6559 0.252777 13.7372C0.33406 13.8191 0.430766 13.8842 0.537316 13.9286C0.643865 13.973 0.75815 13.9958 0.873577 13.9958C0.989004 13.9958 1.10329 13.973 1.20984 13.9286C1.31639 13.8842 1.41309 13.8191 1.49438 13.7372L6.99414 8.22809L12.4939 13.7372C12.5752 13.8191 12.6719 13.8842 12.7784 13.9286C12.885 13.973 12.9993 13.9958 13.1147 13.9958C13.2301 13.9958 13.3444 13.973 13.451 13.9286C13.5575 13.8842 13.6542 13.8191 13.7355 13.7372C13.8175 13.6559 13.8825 13.5592 13.9269 13.4526C13.9713 13.3461 13.9941 13.2318 13.9941 13.1163C13.9941 13.0009 13.9713 12.8866 13.9269 12.78C13.8825 12.6735 13.8175 12.5767 13.7355 12.4955L8.227 6.9951Z" fill="#413D3D"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                    :
                    <div className="main" onClick={(e) => e.stopPropagation()}>
                        <div className='LoginToSteam'>
                            <h3>Войдите с помощью</h3>
                            <button onClick={handleSteamLogin} className='SteamBtn'>
                                <div className='inner'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M10.981 0.00012207C5.19234 0.00012207 0.450312 4.45579 0 10.1178L5.90597 12.5554C6.42167 12.2023 7.03413 12.0135 7.66133 12.0142C7.71994 12.0142 7.77786 12.0158 7.83492 12.019L10.4617 8.21809V8.16488C10.4617 5.87779 12.3257 4.01661 14.617 4.01661C16.9083 4.01661 18.7723 5.87779 18.7723 8.16488C18.7723 10.4519 16.9083 12.3138 14.617 12.3138C14.5852 12.3138 14.5543 12.3131 14.5227 12.3123L10.7764 14.9797C10.7788 15.0292 10.7803 15.0786 10.7803 15.1272C10.7803 16.8448 9.38102 18.2417 7.66133 18.2417C6.15175 18.2417 4.88873 17.1656 4.60333 15.7413L0.378984 13.9977C1.68721 18.615 5.93682 22.0001 10.981 22.0001C17.0669 22.0001 22 17.0747 22 11.0001C22 4.92489 17.0669 0.00012207 10.981 0.00012207ZM6.90525 16.6908L5.55182 16.1324C5.79133 16.6312 6.20675 17.0484 6.75778 17.2775C7.94862 17.7731 9.32181 17.2093 9.81819 16.0194C10.0585 15.4473 10.0599 14.8043 9.82214 14.2312C9.58427 13.654 9.13473 13.2037 8.55834 12.9637C7.98514 12.7261 7.37146 12.7347 6.83229 12.9379L8.23092 13.5151C9.10938 13.8807 9.5248 14.8877 9.15853 15.7646C8.79304 16.6414 7.7837 17.0563 6.90525 16.6908ZM17.3859 8.16488C17.3859 6.64103 16.1435 5.40027 14.6173 5.40027C13.0903 5.40027 11.8479 6.64103 11.8479 8.16488C11.8479 9.68881 13.0903 10.9288 14.6173 10.9288C16.1435 10.9288 17.3859 9.68881 17.3859 8.16488ZM12.5416 8.1602C12.5416 7.01355 13.4732 6.0842 14.6213 6.0842C15.7701 6.0842 16.7017 7.01355 16.7017 8.1602C16.7017 9.30685 15.7701 10.2363 14.6212 10.2363C13.4732 10.2363 12.5415 9.30685 12.5415 8.16028L12.5416 8.1602Z" fill="#171A21"/>
                                    </svg>
                                    Steam
                                </div>
                            </button>
                            {steamLoginErr && <label style={{color: 'red'}}>{steamLoginErr}</label>}
                        </div>
                        <h3>Или используйте пароль</h3>
                        <form onSubmit={handleSubmitAuth(onSubmitAuth)} >
                            <div className='inputWrapper'>
                                <div className='inputBlock'>
                                    <Controller
                                        name="phone"
                                        control={controlAuth}
                                        rules={{
                                            required: 'Укажите номер телефона',
                                            minLength: {
                                                value: 7,
                                                message: "Минимальная длина телефона 7 символов"
                                            },
                                            maxLength: {
                                                value: 15,
                                                message: "Максимальная длина телефона 15 символов"
                                            },
                                        }}
                                        render={({ field: { onChange, onBlur, value, ref } }) => (
                                            <PhoneInput
                                            international
                                                defaultCountry="RU"
                                                placeholder='Номер телефона'
                                                value={value}
                                                onChange={onChange}
                                                onBlur={onBlur}
                                                ref={ref}
                                            />
                                        )}
                                    />
                                </div>
                                {/* <input className='lol' placeholder='Номер телефона' type="tel" {...registerAuth('phone', { required: 'Укажите номер телефона', minLength: { value: 7, message: "Минимальная длина телефона 7 символов" }, maxLength: { value: 15, message: "Максимальная длина телефона 15 символов" }, })}   /> */}
                                {errorsAuth.phone && <label style={{color: 'red'}}>{errorsAuth.phone.message}</label>}
                                {incorrect && <label style={{color: 'red'}}>{incorrect}</label>}
                            </div>

                            <div className='inputWrapper'>
                                <div className='inputBlock'>
                                    <input className='lol' placeholder='Пароль' type="password" {...registerAuth('password', {required: 'Это поле обязательно', minLength: { value: 6, message: "Минимальная длина пароля 6 символов" }, })} />
                                </div>
                                {errorsAuth.password && <label style={{color: 'red'}}>{errorsAuth.password.message}</label>}
                                {incorrect && <label style={{color: 'red'}}>{incorrect}</label>}
                            </div>

                            {/* <p onClick={() => setNavActive('passLow')}><span className='orange' style={{cursor: "pointer"}}>Забыли пароль?</span></p> */}
                            <button className="orangeBtn" type='submit'>Вход</button>
                        </form>
                        <div className='loginBottom'>
                            <div className='logBtn'><span>Забыли пароль?</span></div>
                            <div className='logBtn' onClick={() => setNavActive('reg')}><span>Зарегистрироваться</span></div>
                        </div>
                        <button className='exit' onClick={e => setLogInOpen(false)}>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M8.227 6.9951L13.7355 1.49475C13.9002 1.33009 13.9926 1.10676 13.9926 0.873887C13.9926 0.641017 13.9002 0.417685 13.7355 0.253021C13.5709 0.0883569 13.3475 -0.00415039 13.1147 -0.00415039C12.8819 -0.00415039 12.6586 0.0883569 12.4939 0.253021L6.99414 5.76212L1.49438 0.253021C1.32973 0.0883569 1.10642 -0.00415018 0.873577 -0.00415018C0.640732 -0.00415018 0.417423 0.0883569 0.252777 0.253021C0.0881303 0.417685 -0.00436697 0.641017 -0.00436697 0.873887C-0.00436697 1.10676 0.0881303 1.33009 0.252777 1.49475L5.76128 6.9951L0.252777 12.4955C0.170824 12.5767 0.105776 12.6735 0.0613857 12.78C0.0169952 12.8866 -0.00585938 13.0009 -0.00585938 13.1163C-0.00585938 13.2318 0.0169952 13.3461 0.0613857 13.4526C0.105776 13.5592 0.170824 13.6559 0.252777 13.7372C0.33406 13.8191 0.430766 13.8842 0.537316 13.9286C0.643865 13.973 0.75815 13.9958 0.873577 13.9958C0.989004 13.9958 1.10329 13.973 1.20984 13.9286C1.31639 13.8842 1.41309 13.8191 1.49438 13.7372L6.99414 8.22809L12.4939 13.7372C12.5752 13.8191 12.6719 13.8842 12.7784 13.9286C12.885 13.973 12.9993 13.9958 13.1147 13.9958C13.2301 13.9958 13.3444 13.973 13.451 13.9286C13.5575 13.8842 13.6542 13.8191 13.7355 13.7372C13.8175 13.6559 13.8825 13.5592 13.9269 13.4526C13.9713 13.3461 13.9941 13.2318 13.9941 13.1163C13.9941 13.0009 13.9713 12.8866 13.9269 12.78C13.8825 12.6735 13.8175 12.5767 13.7355 12.4955L8.227 6.9951Z" fill="#413D3D"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                }
            </div>
            {menuCode && <CodeConfirmation menuCode={menuCode} setMenuCode={setMenuCode} sessionId={sessionId} />}
        </>
    )
}
