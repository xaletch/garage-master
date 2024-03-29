import React, { useState, useEffect } from 'react';

import '../components/Profile/Profile.scss';
import { ToHome } from '../components/ToHome/ToHome';
import { ProfileInfo } from '../components/Profile/ProfileInfo/ProfileInfo';
import { SkinsOutput } from '../components/Profile/SkinsOutput/SkinsOutput';
import { SortInventory } from '../components/Profile/SortInventory/SortInventory';
import { ProfileBottom } from '../components/Profile/ProfileBottom/ProfileBottom';

import { useSelector } from 'react-redux';
import { useGetUserItemsQuery, useGetUserQuery, useLazyGetAllItemSaleQuery, useLazyGetItemSaleQuery, useLazyGetWithdrawalItemQuery } from '../redux/cases/cases';
import { Pagination } from '../components/Profile/Pagination/Pagination';
import { Notification } from '../components/Notification/Notification';

export const Profile = () => {
    
    const { start_price, end_price, page } = useSelector((state) => state.filterCase || {});
    const {refetch: refetchUserItems} = useGetUserItemsQuery({ start_price, end_price, page });
    const { refetch: refetchUserData } = useGetUserQuery(null);

    const [openSaleMenu, setOpenSaleMenu] = useState(false);
    const [openSaleAllItemMenu, setOpenSaleAllItemMenu] = useState(false);
    const [openWithdrawalItemMenu, setOpenWithdrawalItemMenu] = useState(false);

    const [itemId, setItemId] = useState();
    const [withdrawalId, setWithdrawalId] = useState();
    
    const [itemPrice, setItemPrice] = useState();
    const [saleItems, setSaleItems] = useState('');
    const [itemWithdrawal, setItemWithdrawal] = useState('');

    const [isSaleItems, setIsSaleItems] = useState(false);
    const [allSaleItems, setAllSaleItems] = useState(false);

    const { data } = useGetUserItemsQuery({ start_price, end_price, page });
    const [sale] = useLazyGetItemSaleQuery();
    const [allSale] = useLazyGetAllItemSaleQuery();

    const [withdrawal] = useLazyGetWithdrawalItemQuery();

    const [showNotification, setShowNotification] = useState(false);
    
    const handleWithdrawalItem = async () => {
        const {data: withdrawalMessage, error: withdrawalMessageError } = await withdrawal(withdrawalId);

        setOpenWithdrawalItemMenu(false);

        refetchUserItems({ start_price, end_price, page });
        refetchUserData();

        setShowNotification(true);

        setItemWithdrawal(withdrawalMessage?.message || withdrawalMessageError?.data?.error);

        setTimeout(() => {
            setShowNotification(false);
            setItemWithdrawal('');
        }, 3350);
    }

    const handleSaleItem = async () => {
        await sale(itemId);
        refetchUserItems({ start_price, end_price, page });
        refetchUserData();
        setOpenSaleMenu(false);

        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3350);
    };

    const handleAllSaleItem = async () => {
        const { isSuccess, data: allSaleData } = await allSale(); 

        if (isSuccess) {
            refetchUserItems({ start_price, end_price, page });
            refetchUserData();

            setIsSaleItems(true);
            setShowNotification(true);
            
            setSaleItems(allSaleData?.message);
        }

        setOpenSaleAllItemMenu(false);

        setTimeout(() => {
            setIsSaleItems(false);
            setShowNotification(false);
        }, 3350);
    };

    return (
        <div className='Profile'>
            <div className='main mainWidht'>
                <ToHome />
                <ProfileInfo />
                <SkinsOutput cls={data?.data?.items} start_price={start_price} end_price={end_price} />
                {start_price !== null && end_price !== null && data?.data?.items.length === 0 ? (
                    <>
                        <SortInventory setOpenSaleAllItemMenu={setOpenSaleAllItemMenu} setAllSaleItems={setAllSaleItems} />
                        <div className='ProfileNoItems'>У вас нет предметов с ценой от {start_price}₽ до {end_price}₽</div>
                    </>
                    ) : (
                        data?.data?.items.length > 0 ? (
                            <>
                                <SortInventory setOpenSaleAllItemMenu={setOpenSaleAllItemMenu} setAllSaleItems={setAllSaleItems} />
                                <div className='ProfileBottom'>
                                    {data?.data?.items.map((obj, index) => <ProfileBottom key={index} image={obj.image} id={obj.id} name={obj.name} price={obj.price} rarity={obj.rarity} status={obj.status} setOpenSaleMenu={setOpenSaleMenu} setItemId={setItemId} setItemPrice={setItemPrice} setWithdrawalId={setWithdrawalId} setOpenWithdrawalItemMenu={setOpenWithdrawalItemMenu} />)}
                                </div>
                                {data?.data?.page_count !== 0 && <Pagination pageCount={data?.data?.page_count} page={page} />}
                            </>
                        ) : (
                            <div className='ProfileNoItems'>У вас нет предметов</div>
                        )
                )}
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
                {openSaleAllItemMenu && (
                    <div className='saleMenu' onClick={() => setOpenSaleAllItemMenu(false)}>
                        <div className='saleMenuBlock' onClick={(e) => e.stopPropagation()}>
                            <h3>Подтверждение продажи скинов</h3>
                                <p>Вы действительно хотите продать все предметы?</p>
                            <div className='saleMenuButtons'>
                                <button className='ok' onClick={() => handleAllSaleItem()}>Ок</button>
                                <button className='cancel' onClick={() => setOpenSaleAllItemMenu(false)}>Отмена</button>
                            </div>
                        </div>
                    </div>
                )}

                {openWithdrawalItemMenu && (
                    <div className='saleMenu' onClick={() => setOpenWithdrawalItemMenu(false)}>
                        <div className='saleMenuBlock' onClick={(e) => e.stopPropagation()}>
                            <h3>Подтверждение вывода скинов</h3>
                                <p>Вы действительно хотите вывести данный предмет</p>
                            <div className='saleMenuButtons'>
                                <button className='ok' onClick={() => handleWithdrawalItem()}>Ок</button>
                                <button className='cancel' onClick={() => setOpenWithdrawalItemMenu(false)}>Отмена</button>
                            </div>
                        </div>
                    </div>
                )}

                <Notification price={itemPrice} showNotification={showNotification} saleItems={saleItems} isSaleItems={isSaleItems} itemWithdrawal={itemWithdrawal} />
            </div>
        </div>
    )
}
