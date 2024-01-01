import React from 'react'
import link_img from '../../../img/link_img';

import './ProfileInfo.scss' 

import { useSelector } from 'react-redux';

export const ProfileInfo = () => {

    // USER INFORMATION
    const userInfo = useSelector((state) => state.user?.data?.data.profile);

    const tradeUrl = useSelector((state) => state.user?.data);
    // console.log(tradeUrl);

    return (
        <div className='ProfileInfo'>
            <div className='ProfileInfoAvatar'>
                <img src={userInfo?.avatar_img} alt=''/>
            </div>
            <div className='ProfileInfoUserName'>
                <p className='userName'>{userInfo?.name}</p>
                <div className='userId'>
                    ID
                    <span>#{userInfo?.id}</span>
                    <div className='userIdCopy'>
                        <img src={link_img.copy_userId} alt='' />
                    </div>
                </div>
            </div>
            <div className="ProfileInfoLine Line1" aria-hidden="true"></div>
            <div className='ProfileInfoBlock'>
                <div className='item countCase'>
                    <div className='icon'>
                        <img src={link_img.caseIco} alt=''/>
                    </div>
                    <p>
                        <span className='itemName'>Кейсы</span>
                        <span className='itemBottom itemCount'>{userInfo?.count_open_case}</span>
                    </p>
                </div>
                <div className="ProfileInfoLine" aria-hidden="true"></div>
                <div className='item countCase'>
                    <div className='icon'>
                        <img src={link_img.user2} alt=''/>
                    </div>
                    <p>
                        <span className='itemName'>На сайте</span>
                        <span className='itemBottom itemOnline'>{userInfo?.date_register}</span>
                    </p>
                </div>
                <div className="ProfileInfoLine" aria-hidden="true"></div>
                <div className='item countCase'>
                    <div className='icon'>
                        <img src={link_img.steam} alt=''/>
                    </div>
                    <p>
                        <span className='itemName'>Профиль в</span>
                        <span className='itemBottom itemProfile'>Steam</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
