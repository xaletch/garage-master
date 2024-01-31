import React, { useEffect, useState } from 'react'

import './AllCases.scss';
import { Link } from 'react-router-dom';
import { useGetCasesQuery } from '../../redux/cases/cases.js';
import { Loading } from '../Loading/Loading';

import { useDispatch, useSelector } from 'react-redux'
import { setCaseItems } from '../../redux/slices/categoriesSlice.js';

export const AllCases = () => {
    const { data, isLoading, isSuccess } = useGetCasesQuery(null);

    const dispatch = useDispatch();
    const { caseItems } = useSelector(state => state.categorySlice);

    useEffect(() => {
        if (isSuccess) {
            dispatch(setCaseItems(data?.data.cases));
        }
    }, [isSuccess]);

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            {caseItems?.map((item) => (
                <div className='CasesAll'key={item.category_name}>
                    <h2>{item.category_name}</h2>
                    <div className="CasesAllMain mainWidht">
                        {item.items.map((subItem, index) => (
                            <Link to={`/selected-case/${subItem.url}`} key={index}>
                                <div className={`CaseCard ${subItem.color}`} key={subItem.url}>
                                    <div className={`CaseCardWrapper ${subItem.color}`}>
                                        <div className={`CaseCardInner ${subItem.color}`}>
                                            <div className="price"><span>{subItem.price}</span> ₽</div>
                                            <img src={subItem.image} alt={subItem.url} />
                                            <p>{subItem.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
