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
            {cases.map((item) => (
                <div className='CasesAll'key={item.category_name}>
                    <h2>{item.category_name}</h2>
                    <div className="CasesAllMain mainWidht">
                        {item.items.map((subItem) => (
                            <Link to={`/selected-case/${subItem.url}`}>
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
