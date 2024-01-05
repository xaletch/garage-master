import React, { useEffect, useState } from 'react';

import '../components/Profile/Profile.scss';
import { ToHome } from '../components/ToHome/ToHome';
import { ProfileInfo } from '../components/Profile/ProfileInfo/ProfileInfo';
import { SkinsOutput } from '../components/Profile/SkinsOutput/SkinsOutput';
import { SortInventory } from '../components/Profile/SortInventory/SortInventory';
import { ProfileBottom } from '../components/Profile/ProfileBottom/ProfileBottom';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUserItems } from '../redux/slices/user';

export const Profile = () => {

    const dispatch = useDispatch();

    const [items, setItems] = useState([]);
    
    const { userItems, start_price, end_price } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserItems());
    }, [start_price, end_price])

    useEffect(() => {
        if (userItems?.data?.items) {
            setItems(userItems?.data?.items);
        }
    }, [userItems]);
    
    return (
        <div className='Profile'>
            <div className='main mainWidht'>
                <ToHome />
                <ProfileInfo />
                <SkinsOutput cls={items} start_price={start_price} end_price={end_price} />
                {start_price !== null && end_price !== null && items.length === 0 ? (
                    <>
                        <SortInventory />
                        <div className='ProfileNoItems'>У вас нет предметов с ценой от {start_price}₽ до {end_price}₽</div>
                    </>
                    ) : (
                        items.length > 0 ? (
                            <>
                                <SortInventory />
                                <div className='ProfileBottom'>
                                    {items.map((obj, index) => <ProfileBottom key={index} image={obj.image} id={obj.id} name={obj.name} price={obj.price} rarity={obj.rarity} />)}
                                </div>
                            </>
                        ) : (
                            <div className='ProfileNoItems'>У вас нет выбитых предметов</div>
                        )
                )}
            </div>
        </div>
    )
}
