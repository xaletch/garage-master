import React from 'react'

import './Profile.scss';
import { ToHome } from '../ToHome/ToHome';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { SkinsOutput } from './SkinsOutput/SkinsOutput';
import { SortInventory } from './SortInventory/SortInventory';
import { ProfileBottom } from './ProfileBottom/ProfileBottom';

export const Profile = () => {
  return (
    <div className='Profile'>
        <div className='main mainWidht'>
            <ToHome />
            <ProfileInfo />
            <SkinsOutput />
            <SortInventory />
            <ProfileBottom />
        </div>
    </div>
  )
}
