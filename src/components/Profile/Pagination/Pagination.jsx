import React, { useState } from 'react'
import { useGetUserItemsQuery } from '../../../redux/cases/cases.js';

import { useDispatch } from 'react-redux';
import { setPage } from '../../../redux/slices/filterCase';

export const Pagination = ({ pageCount, start_price = null, end_price = null, page }) => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(page);
    
    const handlePaginationPage = (num) => {
        dispatch(setPage(num));
        setCurrentPage(num);
    };
    
    const renderPageNumbers = () => {
        const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);
    
        const handleClick = (pageNumber) => {
            if (pageNumber !== '...') {
                handlePaginationPage(pageNumber);
            }
        };
    
        if (pageCount <= 5) {
            return pageNumbers.map((pageNumber, index) => (
                <li
                    key={index}
                    className={`paginationItem ${pageNumber === currentPage ? 'active' : ''}`}
                    onClick={() => handleClick(pageNumber)}
                >
                    {pageNumber}
                </li>
            ));
        } else {
            let renderedPages = [];
            
            if (currentPage <= 3) {
                renderedPages = pageNumbers.slice(0, 5);
            } else if (currentPage >= pageCount - 2) {
                renderedPages = pageNumbers.slice(pageCount - 5, pageCount);
            } else {
                renderedPages.push(currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2);
            }
    
            return renderedPages.map((pageNumber, index) => (
                <li
                    key={index}
                    className={`paginationItem ${pageNumber === currentPage ? 'active' : ''}`}
                    onClick={() => handleClick(pageNumber)}
                >
                    {pageNumber === '...' ? (
                        <span className="paginationDots">...</span>
                    ) : (
                        pageNumber
                    )}
                </li>
            ));
        }
    };
    
    const handlePrevClick = () => {
        if (currentPage > 1) {
            handlePaginationPage(currentPage - 1);
        }
    };
    
    const handleNextClick = () => {
        if (currentPage < pageCount) {
            handlePaginationPage(Math.min(currentPage + 1, pageCount));
        }
    };
    
    return (
        <div className="pagination">
            <div className="paginationWrapper">
                <ul className="paginationList">
                    <li className={`paginationItem ${currentPage <= 1 ? 'disabled' : ''}`} onClick={handlePrevClick}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.29633 4.99882L9.94189 0.35326C10.0211 0.269888 10.019 0.138587 9.93772 0.0593963C9.85644 -0.0177236 9.7293 -0.0177236 9.64802 0.0593963L4.85448 4.85292C4.7732 4.9342 4.7732 5.0655 4.85448 5.14678L9.648 9.94031C9.73137 10.0195 9.86267 10.0174 9.94187 9.93615C10.019 9.85486 10.019 9.72772 9.94187 9.64644L5.29633 4.99882Z" fill="white"/>
                            <path d="M0.502793 4.99882L5.14835 0.35326C5.22754 0.269888 5.22547 0.138587 5.14419 0.0593963C5.06291 -0.0177236 4.93577 -0.0177236 4.85448 0.0593963L0.0609612 4.85085C-0.0203204 4.93213 -0.0203204 5.06343 0.0609612 5.14471L4.85448 9.93824C4.93786 10.0174 5.06916 10.0154 5.14835 9.93407C5.22547 9.85279 5.22547 9.72565 5.14835 9.64437L0.502793 4.99882Z" fill="white"/>
                        </svg>
                    </li>
                    {renderPageNumbers()}
                    <li className={`paginationItem ${currentPage === pageCount ? 'disabled' : ''}`} onClick={handleNextClick}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.14829 4.85067L0.357508 0.0598865C0.276273 -0.0192591 0.142957 -0.0171892 0.0638117 0.0661354C-0.013264 0.14737 -0.013264 0.274437 0.0638117 0.355672L4.70671 4.99857L0.0638117 9.64145C-0.0195129 9.72059 -0.0215828 9.85391 0.0596523 9.93514C0.140887 10.0164 0.272113 10.0205 0.353348 9.9393C0.355438 9.93721 0.357508 9.93514 0.357508 9.93514L5.14829 5.14436C5.22952 5.06313 5.22952 4.9319 5.14829 4.85067Z" fill="white"/>
                            <path d="M9.93906 4.85067L5.14828 0.0598863C5.06495 -0.0192593 4.93373 -0.0171894 4.85458 0.0640457C4.77751 0.145281 4.77751 0.272347 4.85458 0.353582L9.49748 4.99648L4.85458 9.64147C4.77126 9.72061 4.76919 9.85393 4.85042 9.93516C4.93166 10.0164 5.06288 10.0206 5.14412 9.93932C5.14621 9.93723 5.14828 9.93516 5.14828 9.93516L9.93906 5.14436C10.0203 5.06313 10.0203 4.9319 9.93906 4.85067Z" fill="white"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </div>
    );
};
