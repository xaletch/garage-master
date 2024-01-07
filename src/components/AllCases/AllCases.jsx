import React from 'react'

import './AllCases.scss';
import { Link } from 'react-router-dom';
import { useGetCasesQuery } from '../../redux/cases/cases';

export const AllCases = () => {

    const data = useGetCasesQuery(null);

    if (data?.isLoading) {
        return <div style={{textAlign: 'center', fontSize: '24px'}}>Loading...</div>;
    }

    return (
        <>
            {data?.data?.data?.cases.map((item) => (
                <div className='CasesAll'key={item.category_name}>
                    <h2>{item.category_name}</h2>
                    <div className="CasesAllMain mainWidht">
                        {item.items.map((subItem, index) => (
                            <Link to={`/selected-case/${subItem.url}`} key={index}>
                                <div className='CaseCard c5' key={subItem.url}>
                                    <div className="price"><span>{subItem.price}</span> ₽</div>
                                    <img src={subItem.image} alt={subItem.url} />
                                    <p>{subItem.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
