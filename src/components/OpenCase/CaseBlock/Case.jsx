import React, { useState, useEffect } from 'react'

import './Case.scss';

import { Link } from 'react-router-dom';
import { useGetUserQuery } from '../../../redux/cases/cases';

export const Case = ({ name, price, image, url }) => {
    const countCase = ["1", "25", "50", "100"];

    const [selectCountCase, setSelectCountCase] = useState(0);

    const {data: balance } = useGetUserQuery(null);
    const casePrice = parseFloat(price);
    const userBalance = parseFloat(balance?.data?.profile.balance);

    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    };

  return (
    <div className='Case'>
        <div className='CaseWrapper'>
            <div className='CaseImg'>
                <div className='CaseShadow'></div>
                <img src={image} alt=''/>
            </div>
            <div className='BuyCase'>
                <h2 className='CaseName'>{name}</h2>
                <div className='CasePrice'>{price} ₽</div>
                <div className='SelectCountCase'>
                    <span>Выберите количество открытий</span>
                    <div className='CountCaseBlock'>
                        <ul className='CountCaseList'>
                            {countCase.map((item, index) => (
                                <li className={selectCountCase === index ? 'CountCaseItem active' : 'CountCaseItem'} key={index} onClick={() => setSelectCountCase(index)}>x<span>{item}</span></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='TopUpBalance'>
                    {userBalance >= casePrice ?
                    (
                        <>
                            <Link to={`/open/${url}`} className='TopUpBalanceBtn' onClick={handleScrollTop}>Открыть кейс</Link>
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
