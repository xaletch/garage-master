import React from 'react';
import link_img from '../../../img/link_img';

import './ProfileInfo.scss' ;

import { useGetUserQuery } from '../../../redux/cases/cases';

export const ProfileInfo = () => {

    const { data, isLoading } = useGetUserQuery(null);

    return (
        <div className='ProfileInfo'>
            <div className='ProfileInfoAvatar'>
                <img src={data?.data?.profile?.avatar_img} alt=''/>
            </div>
            <div className='ProfileInfoUserName'>
                <p className='userName'>{data?.data?.profile?.name}</p>
                <div className='userId'>
                    ID
                    <span>#{data?.data?.profile?.id}</span>
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
                        <span className='itemBottom itemCount'>{data?.data?.profile?.count_open_case}</span>
                    </p>
                </div>
                <div className="ProfileInfoLine" aria-hidden="true"></div>
                <div className='item countCase'>
                    <div className='icon'>
                        <img src={link_img.user2} alt=''/>
                    </div>
                    <p>
                        <span className='itemName'>На сайте</span>
                        <span className='itemBottom itemOnline'>{data?.data?.profile?.date_register}</span>
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
