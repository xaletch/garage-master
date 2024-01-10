import React, { useState, useEffect } from 'react'

import './Case.scss';

import { Link } from 'react-router-dom';
import { useGetUserQuery, useGetUserItemsQuery } from '../../../redux/cases/cases.js';

import { useSelector } from 'react-redux';

export const Case = ({ name, price, image, url, color, setOpen, open }) => {
    const countCase = ["1", "25", "50", "100"];

    const [selectCountCase, setSelectCountCase] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);

    const { start_price, end_price, page } = useSelector((state) => state.filterCase);

    const {refetch: refetchUserItems } = useGetUserItemsQuery({ start_price, end_price, page });
    const { refetch: refetchUserData } = useGetUserQuery(null);

    const {data: balance } = useGetUserQuery(null);
    const casePrice = parseFloat(price);
    const userBalance = parseFloat(balance?.data?.profile.balance);

    const handleOpenCase = async () => {
        const { isSuccess } = await open(url);
    
        if (isSuccess) {
            refetchUserItems({ start_price, end_price, page });
            refetchUserData();

            setOpen(true);
            setIsDisabled(false);
        };

        setIsDisabled(true);
    }

  return (
    <div className='Case'>
        <div className='CaseWrapper'>
            <div className={`CaseImg ${color}`}>
                <div className={`CaseShadow ${color}`}></div>
                <img src={image} alt=''/>
            </div>
            <div className='BuyCase'>
                <h2 className='CaseName'>{name}</h2>
                <div className={`CasePrice ${color}`}>{price} ₽</div>

                {/* КОЛИЧЕСТВО ОТКРЫТИЙ КЕЙСА */}
                {/* <div className='SelectCountCase'>
                    <span>Выберите количество открытий</span>
                    <div className='CountCaseBlock'>
                        <ul className='CountCaseList'>
                            {countCase.map((item, index) => (
                                <li className={selectCountCase === index ? 'CountCaseItem active' : 'CountCaseItem'} key={index} onClick={() => setSelectCountCase(index)}>x<span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div> */}
                <div className='TopUpBalance'>
                    {userBalance >= casePrice ?
                    (
                        <>
                            <button className='TopUpBalanceBtn' onClick={handleOpenCase} disabled={isDisabled}>Открыть кейс</button>
                        </>
                    )
                    :
                    (
                        <>
                            <span>Недостаточно средств</span>
                            <button className='TopUpBalanceBtn'>Пополнение баланса</button>
                        </>
                    )
                    }
                </div>
                <div className='warning'>
                    <h3>Ширп здесь вне закона!</h3>
                    <p>Фарм кейсы созданы, <br/> чтобы получать только лучшее.</p>
                    <span>Поэтому ширп продается автоматически!</span>
                </div>
            </div>
        </div>
    </div>
  )
}
