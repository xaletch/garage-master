import React from 'react'

import link_img from '../../../img/link_img';

import './ProfileBottom.scss';
import { ProfileBottomCard } from './ProfileBottomCard';

export const ProfileBottom = () => {
  return (
    <div className='ProfileBottom'>
        <ProfileBottomCard img={link_img.gun} color={'9830b3'}/>
        <ProfileBottomCard img={link_img.gun} color={'3092bb'}/>
        <ProfileBottomCard img={link_img.gun} color={'c9405d'}/>
        <ProfileBottomCard img={link_img.gun} color={'9830b3'}/>
        <ProfileBottomCard img={link_img.gun} color={'de7422'}/>
        <ProfileBottomCard img={link_img.gun} color={'9830b3'}/>
        <ProfileBottomCard img={link_img.gun} color={'c9405d'}/>
        <ProfileBottomCard img={link_img.gun} color={'1dd87e'}/>
        <ProfileBottomCard img={link_img.gun} color={'9830b3'}/>
        <ProfileBottomCard img={link_img.gun} color={'1dd87e'}/>
        <ProfileBottomCard img={link_img.gun} color={'3092bb'}/>
        <ProfileBottomCard img={link_img.gun} color={'9830b3'}/>
        <ProfileBottomCard img={link_img.gun} color={'de7422'}/>
        <ProfileBottomCard img={link_img.gun} color={'9830b3'}/>
    </div>
  )
}
