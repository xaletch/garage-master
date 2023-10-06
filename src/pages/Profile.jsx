import React from 'react';

import '../components/Profile/Profile.scss';
import { ToHome } from '../components/ToHome/ToHome';
import { ProfileInfo } from '../components/Profile/ProfileInfo/ProfileInfo';
import { SkinsOutput } from '../components/Profile/SkinsOutput/SkinsOutput';
import { SortInventory } from '../components/Profile/SortInventory/SortInventory';
import { ProfileBottom } from '../components/Profile/ProfileBottom/ProfileBottom';

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
