import React from 'react';

import './Notification.scss';

export const Notification = ({ price, showNotification, saleItems, isSaleItems }) => {
    return (
        <div className={`notification ${showNotification ? 'open' : ''}`}>
            <div className='notificationInner'>
                <div className='notificationHead'>Готово</div>
                {isSaleItems ? 
                    <p className='notificationText'>{saleItems}</p>
                :
                    <p className='notificationText'>Предмет успешно продан за {price} ₽</p>}
                <div className='notificationLine'></div>
            </div>
        </div>
    )
}
