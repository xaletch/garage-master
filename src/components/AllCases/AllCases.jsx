import React from 'react'
import { useSelector } from 'react-redux';

import './AllCases.scss';

export const AllCases = () => {
    const cases = useSelector((state) => state.cases.items?.cases);

    if (!cases) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {cases.map((item) => (
                <div className='CasesAll'>
                    <h2>{item.category_name}</h2>
                    <nav className='mainWidht'>
                        <a href="#">Навигация </a>
                        <a href="#">Навигация </a>
                        <a href="#">Навигация </a>
                        <a href="#">Навигация </a>
                    </nav>
                    <div className="CasesAllMain mainWidht">
                        {item.items.map((item) => (
                            <div className='CaseCard c5'>
                                <div className="price"><span>{item.price}</span> ₽</div>
                                <img src={item.image} alt={item.url} />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}
