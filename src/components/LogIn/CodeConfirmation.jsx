import React, { useState } from 'react'

import { useForm } from 'react-hook-form';

import { useFetchCodeMutation } from '../../redux/cases/cases';

export const CodeConfirmation = ({ menuCode, setMenuCode, sessionId }) => {
    const [incorrectCode, setIncorrectCode] = useState('');

    const [fetchCode] = useFetchCodeMutation();

    const {
        register: registerConfirmation,
        handleSubmit: handleSubmitConfirmation,
        formState: { errors: errorsConfirmation },
    } = useForm({
        defaultValues: {
            code: ""
        },
        mode: "onSubmit",
    });

    const setCookieWithExpiration = (cookieName, cookieValue, expHours) => {
        const date = new Date();
        date.setTime(date.getTime() + (expHours * 60 * 60 * 1000));
        const expires = date.toUTCString();
        document.cookie = `${cookieName}=${cookieValue}; expires=${expires}; path=/;`;
    }

    const onSubmitConfirmation = async (values) => {
        try {
            const successfully = await fetchCode({ session_id: sessionId, code: values.code });

            if (successfully.data.data.access_token) {
                window.localStorage.setItem('access_token', successfully.data.data.access_token);
                setCookieWithExpiration('access_token', successfully.data.data.access_token, 24);
                setMenuCode(false);
            }
        }
        catch (err) {
            setIncorrectCode('Неверный код')
        }
    }

    return (
        <div className={`LogIn ${menuCode ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
            {menuCode &&
                <div className="main">
                    <form onSubmit={handleSubmitConfirmation(onSubmitConfirmation)}>
                        <p className='code'>Мы отправили СМС с кодом подтверждения на ваш номер телефона. Пожалуйста, введите данный код ниже</p>

                        <div className='inputWrapper'>
                            <div className='inputBlock'>
                                <input className='lol' type="text" placeholder='Код из СМС' {...registerConfirmation('code', { required: 'Код из СМС', minLength: { value: 6, message: "Код должен быть 6 символов" }, maxLength: { value: 6, message: "Код должен быть 6 символов" }, })}/>
                            </div>
                            {errorsConfirmation.code && <label style={{color: 'red'}}>{errorsConfirmation.code.message}</label>}
                            {incorrectCode && <label style={{color: 'red'}}>{incorrectCode}</label>}
                        </div>
                        
                        <button className="orangeBtn" type="submit">Подтвердить</button>
                    </form>
                </div>
            }
        </div>
    )
}
