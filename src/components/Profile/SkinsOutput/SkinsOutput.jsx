import React, { useState, useEffect } from 'react';

import './SkinsOutput.scss';
import link_img from '../../../img/link_img';

import { useForm } from 'react-hook-form';

import { Link } from 'react-router-dom';
import { useFetchTradeUrlMutation, useGetUserQuery } from '../../../redux/cases/cases.js';

export const SkinsOutput = ({ cls, start_price, end_price }) => {
    const [tradeUrlErr, setTradeUrlErr] = useState(true);
    const [tradeMessage, setTradeMessage] = useState('');

    const [ addTradeUrl, { error: tradeError, isSuccess: tradeSuccess, refetch: refetchTradeUrl } ] = useFetchTradeUrlMutation();
    const { data: userData,  refetch: refetchUserData } = useGetUserQuery();

    const {
        register: registerTradeUrl,
        handleSubmit: handleSubmitTradeUrl,
        formState: { errors: errorsTradeUrl },
        setValue: setTradeUrlValue,
    } = useForm({
        defaultValues: {
            trade_url: userData?.data?.profile.trade_url ? userData?.data?.profile.trade_url : '',
        },
        mode: "onSubmit",
    });

    useEffect(() => {
        if (userData && userData.data && userData.data.profile.trade_url) {
            setTradeUrlValue("trade_url", userData.data.profile.trade_url);
            setTradeUrlErr(false);
        }
    }, [userData]);

    // console.log(tradeSuccess);

    useEffect(() => {
        if (tradeSuccess) {
            refetchUserData();
            setTradeMessage('Ссылка на трейд успешно обновлена!');

            setTimeout(() => {
                setTradeMessage('')
            }, 2000);
        }
    }, [tradeSuccess]);

    useEffect(() => {
        if (tradeError) {
            setTradeUrlErr(true);
            setTradeMessage('Ссылка на трейд неверная');
        }
    }, [tradeError]);

    const onSubmitTradeUrl = async (value) => {
        try {
            await addTradeUrl(value);
            setTradeUrlErr(false);
            refetchTradeUrl();

        } catch (err) {}
    };

    return (
        <div className='SkinsOutput' >
            <div className='SkinsOutputWrapper'>
                <div className='SkinsOutputHead'>
                    <div className='item'>
                        <h3 className='itemTitle'>Trade-URL</h3>
                        <p className='ItemDescription'>Введите Trade-URL</p>
                        <div className='num'>01</div>
                    </div>
                    <div className="SkinsOutputLine" aria-hidden="true"></div>
                    <div className='item'>
                        <h3 className='itemTitle'>Пополнение баланса</h3>
                        <p className='ItemDescription'><span>Быстрое пополнение</span> - принимаем любые виды <br/> электронных активов и даже скины</p>
                        <div className='num'>02</div>
                    </div>
                    <div className="SkinsOutputLine" aria-hidden="true"></div>
                    <div className='item'>
                        <h3 className='itemTitle'>Выигрывайте!</h3>
                        <p className='ItemDescription'>Получайте лучший дроп из кейсов <br/> на EasyDrop</p>
                        <div className='num'>03</div>
                    </div>
                </div>
                <div className='SkinsOutputContent'>
                    <p className='SkinsOutputContentTitle'>Найти ссылку можно <Link to={'http://steamcommunity.com/my/tradeoffers/privacy'} target="_blank">на сайте Steam</Link></p>
                    <form className='TradeUrlForm' onSubmit={handleSubmitTradeUrl(onSubmitTradeUrl)}>
                        <div className='inputLink'>
                            <input type='text' {...registerTradeUrl('trade_url', {required: 'Это поле обязательно', minLength: { value: 0, message: "Введите trade ссылку" }, })} placeholder='Введите свою trade ссылку' />
                            <button className='saveBtn' type='submit'>Сохранить</button>
                        </div>
                        {tradeMessage ? <p className='errorMessage'>{tradeMessage}</p> : <p>{setTradeMessage}</p>}
                    </form>
                    <div className='outputAvailable'>
                        <span className='update'>
                            <img src={link_img.update} alt='' />
                        </span>
                        <p>Вывод скинов {tradeUrlErr ? 'недоступен' : 'доступен'}!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
