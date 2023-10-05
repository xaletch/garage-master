import React from 'react'
import link_img from '../../../img/link_img';

import './ProfileInfo.scss' 

export const ProfileInfo = () => {
  return (
    <div className='ProfileInfo'>
        <div className='ProfileInfoAvatar'>
            <img src={link_img.userAvatar} alt=''/>
        </div>
        <div className='ProfileInfoUserName'>
            <p className='userName'>ИмяЮзера#</p>
            <div className='userId'>
                ID
                <span>#660990</span>
                <div className='userIdCopy'>
                    <img src={link_img.copy_userId} alt='' />
                </div>
            </div>
        </div>
        <div class="ProfileInfoLine" aria-hidden="true"></div>
        <div className='ProfileInfoBlock'>
            <div className='item countCase'>
                <div className='icon'>
                    <img src={link_img.caseIco} alt=''/>
                </div>
                <p>
                    <span className='itemName'>Кейсы</span>
                    <span className='itemBottom itemCount'>950</span>
                </p>
            </div>
            <div class="ProfileInfoLine" aria-hidden="true"></div>
            <div className='item countCase'>
                <div className='icon'>
                    <img src={link_img.user2} alt=''/>
                </div>
                <p>
                    <span className='itemName'>На сайте</span>
                    <span className='itemBottom itemOnline'>3 дня</span>
                </p>
            </div>
            <div class="ProfileInfoLine" aria-hidden="true"></div>
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
