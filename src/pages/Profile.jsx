import React, { useEffect, useState } from 'react';

import '../components/Profile/Profile.scss';
import { ToHome } from '../components/ToHome/ToHome';
import { ProfileInfo } from '../components/Profile/ProfileInfo/ProfileInfo';
import { SkinsOutput } from '../components/Profile/SkinsOutput/SkinsOutput';
import { SortInventory } from '../components/Profile/SortInventory/SortInventory';
import { ProfileBottom } from '../components/Profile/ProfileBottom/ProfileBottom';

import { useSelector } from 'react-redux';
import { useGetUserItemsQuery } from '../redux/cases/cases';

export const Profile = () => {
    
    const { start_price, end_price } = useSelector((state) => state.filterCase);
    
    const { data } = useGetUserItemsQuery({ start_price, end_price });

    return (
        <div className='Profile'>
            <div className='main mainWidht'>
                <ToHome />
                <ProfileInfo />
                <SkinsOutput cls={data?.data?.items} start_price={start_price} end_price={end_price} />
                {start_price !== null && end_price !== null && data?.data?.items.length === 0 ? (
                    <>
                        <SortInventory />
                        <div className='ProfileNoItems'>У вас нет предметов с ценой от {start_price}₽ до {end_price}₽</div>
                    </>
                    ) : (
                        data?.data?.items.length > 0 ? (
                            <>
                                <SortInventory />
                                <div className='ProfileBottom'>
                                    {data?.data?.items.map((obj, index) => <ProfileBottom key={index} image={obj.image} id={obj.id} name={obj.name} price={obj.price} rarity={obj.rarity} status={obj.status} />)}
                                </div>
                            </>
                        ) : (
                            <div className='ProfileNoItems'>У вас нет предметов</div>
                        )
                )}
            </div>
        </div>
    )
}
