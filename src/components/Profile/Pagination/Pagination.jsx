import React from 'react'
import { useGetUserItemsQuery } from '../../../redux/cases/cases';

import { useDispatch } from 'react-redux';
import { setPage } from '../../../redux/slices/filterCase';

export const Pagination = ({ pageCount, start_price = null, end_price = null, page }) => {
    const dispatch = useDispatch();
  
    const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);
  
    const { refetch } = useGetUserItemsQuery({ start_price, end_price, page });
  
    const handlePaginationPage = (num) => {
      dispatch(setPage(num));
  
      refetch({ start_price, end_price, page: num });
    };
  
    const renderPageNumbers = () => {
        if (pageCount <= 4) {
            return pageNumbers.map((pageNumber, index) => (
                <li
                    key={index}
                    className={`paginationItem ${pageNumber === page ? 'active' : ''}`}
                    onClick={() => handlePaginationPage(pageNumber)}
                >
                    {pageNumber}
                </li>
            ));
        } else {
            let renderedPages = [];
            if (page <= 3) {
                renderedPages = pageNumbers.slice(0, 4);
                renderedPages.push('...');
                renderedPages.push(pageCount);
            } else if (page >= pageCount - 2) {
                renderedPages.push(1);
                renderedPages.push('...');
                renderedPages = renderedPages.concat(pageNumbers.slice(pageCount - 4, pageCount));
            } else {
                renderedPages.push(1);
                renderedPages.push('...');
                renderedPages.push(page - 1);
                renderedPages.push(page);
                renderedPages.push(page + 1);
                renderedPages.push('...');
                renderedPages.push(pageCount);
            }
  
            return renderedPages.map((pageNumber, index) => (
                <li
                    key={index}
                    className={`paginationItem ${pageNumber === page ? 'active' : ''}`}
                    onClick={() => {

                        if (pageNumber === '...') {
                            const nextPage = page + 1;
                            const prevPage = page - 1;

                            if (nextPage <= pageCount) {
                                handlePaginationPage(nextPage);
                            } else if (prevPage >= 1) {
                                handlePaginationPage(prevPage);
                            }
                        } else {
                            handlePaginationPage(pageNumber);
                        }
                    }}
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
  
    return (
        <div className="pagination">
            <div className="paginationWrapper">
                <ul className="paginationList">{renderPageNumbers()}</ul>
            </div>
        </div>
    );
};
