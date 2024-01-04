import React, { useState } from 'react'

import './Case.scss';

import { Link } from 'react-router-dom';

export const Case = ({ name, price, image }) => {
    const countCase = ["10", "25", "50", "100"];

    const [selectCountCase, setSelectCountCase] = useState(2);

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
                    <span>Недостаточно средств</span>
                    {/* <button className='TopUpBalanceBtn'><Link to='/opening-case' onClick={handleScrollTop}>Пополнение баланса</Link></button> */}
                    <button className='TopUpBalanceBtn'>Пополнение баланса</button>
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
