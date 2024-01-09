import React from 'react'
import { useGetUserItemsQuery } from '../../../redux/cases/cases';

export const Pagination = ({ pageCount, currentPage}) => {
    const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);
  
    const { data, error, isFetching, refetch, isError } = useGetUserItemsQuery();
  
    console.log(isError);

    const handlePaginationPage = (pageNumber) => {
      refetch({ start_price: 10, end_price: 100, page: pageNumber });
      console.log('currentPage', currentPage);
      console.log('pageNumber', pageNumber);
    };
  
    return (
      <div className='pagination'>
        <div className='paginationWrapper'>
          <ul className='paginationList'>
            {pageNumbers.map((pageNumber, index) => (
              <li
                key={index}
                className={`paginationItem ${pageNumber === currentPage ? 'active' : ''}`}
                onClick={() => handlePaginationPage(pageNumber)}
              >
                {pageNumber}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
