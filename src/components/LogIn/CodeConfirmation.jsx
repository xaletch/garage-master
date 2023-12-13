import React, { useState } from 'react'

import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { fetchConfirmation } from '../../redux/slices/registration';

export const CodeConfirmation = ({ menuCode, setMenuCode }) => {
    const [incorrectCode, setIncorrectCode] = useState('');
    const dispatch = useDispatch();
    const session_id = useSelector((state) => state.registration?.data?.data?.session_id);

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

    const onSubmitConfirmation = async (values) => {
        try {
            const successfully = await dispatch(fetchConfirmation({ session_id: session_id, code: values.code }));

            if ('access_token' in successfully.payload.data) {
                window.localStorage.setItem('access_token', successfully.payload.data.access_token);
                document.cookie = `access_token=${successfully.payload.data.access_token}; expires=Sun, 1 Jan 2024 00:00:00 UTC; path=/;`;
                setMenuCode(false);
            }
        }
        catch (err) {
            console.log('Неверный код');
            setIncorrectCode('Неверный код')
        }
    }

    return (
        <div className={`LogIn ${menuCode ? 'open' : ''}`}>
            {menuCode &&
                <div className="main">
                    <form onSubmit={handleSubmitConfirmation(onSubmitConfirmation)}>
                        <p className='code'>Мы отправили СМС с кодом подтверждения на ваш номер телефона. Пожалуйста, введите данный код ниже</p>
                        <input className='lol' type="text" placeholder='Код из СМС' {...registerConfirmation('code', { required: 'Код из СМС', minLength: { value: 6, message: "Код должен быть 6 символов" }, maxLength: { value: 6, message: "Код должен быть 6 символов" }, })}/>
                        {errorsConfirmation.code && <label style={{color: 'red'}}>{errorsConfirmation.code.message}</label>}
                        {incorrectCode && <label style={{color: 'red'}}>{incorrectCode}</label>}
                        
                        <button className="orangeBtn" type="submit">Подтвердить</button>
                    </form>
                </div>
            }
        </div>
    )
}
