import React, { useState, useEffect } from 'react'

import './Case.scss';

import { Link } from 'react-router-dom';
import { useGetUserQuery, useGetUserItemsQuery } from '../../../redux/cases/cases.js';

import { useSelector } from 'react-redux';

export const Case = ({ name, price, image, url, color, setOpen, open, setIsSpinning,  setTranslateX, setCaseOpen, dataWin, findLastIndexWithName, multipliedItems, itemWidth, setLogin }) => {
    const countCase = ["1", "25", "50", "100"];

    const isAuth = document.cookie?.split('; ').find(row => row?.startsWith('access_token='));

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
        
        setTranslateX(0);

        if (isSuccess) {
            refetchUserItems({ start_price, end_price, page });
            refetchUserData();

            setIsSpinning(true);

            setOpen(true);
            setIsDisabled(false);
        };

        setIsDisabled(true);


        const timer = setTimeout(() => {
            if (dataWin && dataWin?.data) {
                const openedItemName = dataWin.data.drops.map((item) => item.name)[0];
                const lastItemIndex = findLastIndexWithName(multipliedItems, openedItemName);
        
                const screenCenterOffset = (5 * itemWidth) / 2;
                const cardCenterOffset = itemWidth / 1;
        
                if (lastItemIndex !== -1) {
                    const leftPosition = (lastItemIndex * itemWidth) - (screenCenterOffset - cardCenterOffset);
                    const maxTranslate = (multipliedItems.length) * itemWidth;
                    setTranslateX(-Math.min(leftPosition, maxTranslate));
                }
            }
        
            setCaseOpen(true);
        }, 1000);
        
        return () => clearTimeout(timer);
    };

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
                    {isAuth ? 
                        (userBalance >= casePrice ? 
                            (
                                <button className='TopUpBalanceBtn' onClick={handleOpenCase} disabled={isDisabled}>Открыть кейс</button>
                            )
                        :
                            (
                                <>
                                    <span>Недостаточно средств</span>
                                    <button className='TopUpBalanceBtn'>Пополнение баланса</button>
                                </>
                            )
                        )
                        : (
                            <>
                                <span>Вы не авторизованы</span>
                                <button className='TopUpBalanceBtn' onClick={() => setLogin(true)}>Авторизоваться</button>
                            </>
                    )}
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
