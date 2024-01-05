import React, { useState } from 'react';

import './SkinsOutput.scss';
import link_img from '../../../img/link_img';

import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { fetchTradeUrl, fetchUser } from '../../../redux/slices/user';
import { Link } from 'react-router-dom';

export const SkinsOutput = ({ cls, start_price, end_price }) => {
    const [tradeUrlErr, setTradeUrlErr] = useState('');

    const dispatch = useDispatch();

    const tradeUrl = useSelector((state) => state.user?.data?.data.profile?.trade_url);

    const {
        register: registerTradeUrl,
        handleSubmit: handleSubmitTradeUrl,
        formState: { errors: errorsTradeUrl },
    } = useForm({
        defaultValues: {
            trade_url: tradeUrl !== '' ? tradeUrl : '',
        },
        mode: "onSubmit",
    });

    const onSubmitTradeUrl = async (value) => {
        try {
            await dispatch(fetchTradeUrl(value));
            dispatch(fetchUser());
        }
        catch (err) {
            setTradeUrlErr('Ссылка на трейд неверная');
        }
    };

    // const styleMargin = { marginBottom: cls.length === 0 && end_price === null && start_price === null ? "160px" : "0" };

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
                    <p className='SkinsOutputContentTitle'>Найти ссылку можно <Link to={'http://steamcommunity.com/my/tradeoffers/privacy'}>на сайте Steam</Link></p>
                    <form className='inputLink' onSubmit={handleSubmitTradeUrl(onSubmitTradeUrl)}>
                        <input type='text' {...registerTradeUrl('trade_url', {required: 'Это поле обязательно', minLength: { value: 0, message: "Введите trade ссылку" }, })} placeholder='Введите свою trade ссылку' />
                        {tradeUrlErr && <label style={{color: 'red'}}>{tradeUrlErr}</label>}
                        <button className='saveBtn' type='submit'>Сохранить</button>
                    </form>
                    <div className='outputAvailable'>
                        <span className='update'>
                            <img src={link_img.update} alt='' />
                        </span>
                        <p>Вывод скинов доступен!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
