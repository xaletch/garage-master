import React from 'react';

import './Notification.scss';

export const Notification = ({ price, showNotification, saleItems }) => {
    return (
        <div className={`notification ${showNotification ? 'open' : ''}`}>
            <div className='notificationInner'>
                <div className='notificationHead'>Готово</div>
                {saleItems !== undefined ? 
                    <p className='notificationText'>{saleItems}</p>
                : 
                    <p className='notificationText'>Предмет успешно продан за {price} ₽</p>}
                <div className='notificationLine'></div>
            </div>
        </div>
    )
}
