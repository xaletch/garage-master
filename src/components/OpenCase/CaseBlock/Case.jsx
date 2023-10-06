import React, { useState } from 'react'

import './Case.scss';

import link_img from '../../../img/link_img'
import { Link } from 'react-router-dom';

const countCase = ["10", "25", "50", "100"]

export const Case = () => {
    const [selectCountCase, setSelectCountCase] = useState(2);
  return (
    <div className='Case'>
        <div className='CaseWrapper'>
            <div className='CaseImg'>
                <div className='CaseShadow'></div>
                <img src={link_img.freeCase} alt=''/>
            </div>
            <div className='BuyCase'>
                <h2 className='CaseName'>Бесплатный кейс #1</h2>
                <div className='CasePrice'>800 ₽</div>
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
                    <Link to='/opening-case'>
                        <button className='TopUpBalanceBtn'>Пополнение баланса</button>
                    </Link>
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
