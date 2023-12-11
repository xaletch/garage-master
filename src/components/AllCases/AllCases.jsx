import React from 'react'
import { useSelector } from 'react-redux';

import './AllCases.scss';
import { Link } from 'react-router-dom';

export const AllCases = () => {
    const cases = useSelector((state) => state.cases.items?.cases);

    if (!cases) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {cases.map((item, index) => (
                <div className='CasesAll' key={index}>
                    <h2>{item.category_name}</h2>
                    <div className="CasesAllMain mainWidht">
                        {item.items.map((item, index) => (
                            <Link to={`/selected-case/${item.url}`}>
                                <div className='CaseCard c5' key={index}>
                                    <div className="price"><span>{item.price}</span> ₽</div>
                                    <img src={item.image} alt={item.url} />
                                    <p>{item.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
