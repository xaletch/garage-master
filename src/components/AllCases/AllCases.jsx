import React, { useEffect } from 'react'
import './AllCases.scss';
import { Link } from 'react-router-dom';
import { Loading } from '../Loading/Loading';

export const AllCases = ({ categoryRefs, categoryCases, isLoading, scrollPosition }) => {
    useEffect(() => {
        categoryRefs.current = {};
        categoryCases?.data.cases?.forEach((item) => {
            categoryRefs.current[item.category_name] = React.createRef();
        });
    }, [categoryCases]);

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            {categoryCases?.data.cases?.map((item) => (
                <div className='CasesAll' key={item.category_name} ref={categoryRefs.current[item.category_name]}>
                    <h2>{item.category_name}</h2>
                    <div className="CasesAllMain mainWidht">
                        {item.items.map((subItem, index) => (
                            <Link to={`/selected-case/${subItem.url}`} key={index} onClick={() => localStorage.setItem('scrollPosition', scrollPosition)}>
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
