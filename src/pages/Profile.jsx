import React from 'react';

import '../components/Profile/Profile.scss';
import { ToHome } from '../components/ToHome/ToHome';
import { ProfileInfo } from '../components/Profile/ProfileInfo/ProfileInfo';
import { SkinsOutput } from '../components/Profile/SkinsOutput/SkinsOutput';
import { SortInventory } from '../components/Profile/SortInventory/SortInventory';
import { ProfileBottom } from '../components/Profile/ProfileBottom/ProfileBottom';

import { useSelector } from 'react-redux';

export const Profile = () => {

    const caseInfo = useSelector((state) => state.user?.userItems?.data?.items);

    return (
        <div className='Profile'>
            <div className='main mainWidht'>
                <ToHome />
                <ProfileInfo />
                <SkinsOutput cls={!caseInfo?.items} />
                {caseInfo?.items &&
                    <>    
                        <SortInventory />
                        <ProfileBottom items={caseInfo?.items}/>
                    </>
                }
            </div>
        </div>
    )
}
