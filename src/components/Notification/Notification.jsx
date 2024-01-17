import React from 'react';

import './Notification.scss';

export const Notification = ({ price, showNotification, saleItems, isSaleItems, itemWithdrawal }) => {
    return (
        <div className={`notification ${showNotification ? 'open' : ''}`}>
            <div className='notificationInner'>
                <div className='notificationHead'>
                    {itemWithdrawal === 'Ссылка на трейд не установлена' ? 'Ошибка' : 'Готово'}
                </div>
                {itemWithdrawal !== '' ? 
                    <p>{itemWithdrawal}</p>
                :
                    (isSaleItems ? 
                        <p className='notificationText'>{saleItems}</p>
                    :
                        <p className='notificationText'>Предмет успешно продан за {price} ₽</p>
                    )
                }
                <div className='notificationLine'></div>
            </div>
        </div>
    )
}
