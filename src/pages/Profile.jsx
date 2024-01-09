import React, { useState, useEffect } from 'react';

import '../components/Profile/Profile.scss';
import { ToHome } from '../components/ToHome/ToHome';
import { ProfileInfo } from '../components/Profile/ProfileInfo/ProfileInfo';
import { SkinsOutput } from '../components/Profile/SkinsOutput/SkinsOutput';
import { SortInventory } from '../components/Profile/SortInventory/SortInventory';
import { ProfileBottom } from '../components/Profile/ProfileBottom/ProfileBottom';

import { useSelector } from 'react-redux';
import { useGetUserItemsQuery, useGetUserQuery, useLazyGetItemSaleQuery } from '../redux/cases/cases';
import { Pagination } from '../components/Profile/Pagination/Pagination';

export const Profile = () => {
    
    const { start_price, end_price } = useSelector((state) => state.filterCase) || {};

    const {refetch: refetchUserItems} = useGetUserItemsQuery({ start_price, end_price });
    const { refetch: refetchUserData } = useGetUserQuery(null);

    const [openSaleMenu, setOpenSaleMenu] = useState(false);
    const [itemId, setItemId] = useState();
    const [itemPrice, setItemPrice] = useState();

    const { data } = useGetUserItemsQuery({ start_price, end_price });
    const [sale] = useLazyGetItemSaleQuery();

    const handleSaleItem = async () => {
        await sale(itemId);
        refetchUserItems({ start_price, end_price });
        refetchUserData();
        setOpenSaleMenu(false);
    };

    // console.log(data?.data)

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
                                    {data?.data?.items.map((obj, index) => <ProfileBottom key={index} image={obj.image} id={obj.id} name={obj.name} price={obj.price} rarity={obj.rarity} status={obj.status} setOpenSaleMenu={setOpenSaleMenu} setItemId={setItemId} setItemPrice={setItemPrice} />)}
                                </div>
                            </>
                        ) : (
                            <div className='ProfileNoItems'>У вас нет предметов</div>
                        )
                )}
                {/* <Pagination pageCount={data?.data?.page_count} pageSize={data?.data?.page_size} currentPage={data?.data?.current_page} start_price={start_price} end_price={end_price} /> */}
                {openSaleMenu && (
                    <div className='saleMenu' onClick={() => setOpenSaleMenu(false)}>
                        <div className='saleMenuBlock' onClick={(e) => e.stopPropagation()}>
                            <h3>Подтверждение продажи скинов</h3>
                            <p>Вы действительно хотите продать этот предмет за <span>{itemPrice} ₽</span>?</p>
                            <div className='saleMenuButtons'>
                                <button className='ok' onClick={() => handleSaleItem(itemId)}>Ок</button>
                                <button className='cancel' onClick={() => setOpenSaleMenu(false)}>Отмена</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
