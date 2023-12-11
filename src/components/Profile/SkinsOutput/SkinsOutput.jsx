import React from 'react';

import './SkinsOutput.scss';
import link_img from '../../../img/link_img';

export const SkinsOutput = ({ cls }) => {
     return (
        <div className='SkinsOutput' style={cls && {marginBottom: '160px'}} >
            <div className='SkinsOutputWrapper'>
                <div className='SkinsOutputHead'>
                    <div className='item'>
                        <h3 className='itemTitle'>Trade-URL</h3>
                        <p className='ItemDescription'>Введите Trade-URL</p>
                        <div className='num'>01</div>
                    </div>
                    <div class="SkinsOutputLine" aria-hidden="true"></div>
                    <div className='item'>
                        <h3 className='itemTitle'>Пополнение баланса</h3>
                        <p className='ItemDescription'><span>Быстрое пополнение</span> - принимаем любые виды <br/> электронных активов и даже скины</p>
                        <div className='num'>02</div>
                    </div>
                    <div class="SkinsOutputLine" aria-hidden="true"></div>
                    <div className='item'>
                        <h3 className='itemTitle'>Выигрывайте!</h3>
                        <p className='ItemDescription'>Получайте лучший дроп из кейсов <br/> на EasyDrop</p>
                        <div className='num'>03</div>
                    </div>
                </div>
                <div className='SkinsOutputContent'>
                    <p className='SkinsOutputContentTitle'>Найти ссылку можно <span>на сайте Steam</span></p>
                    <div className='inputLink'>
                        <input type='text' />
                        <button className='saveBtn'>Сохранить</button>
                    </div>
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
