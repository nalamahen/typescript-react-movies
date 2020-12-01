import React, { FC, useState, useEffect } from 'react';

import './Paginate.scss';

interface IProps {
  currentPage: number;
  totalPages: number;
  paginate: (type: string) => void;
}

const Paginate: FC<IProps> = ({ currentPage, totalPages, paginate }) => {
  const [page, setPage] = useState<number>(0);
  const [totalPageNumber, setTotalPageNumber] = useState<number>();

  useEffect(() => {
    setPage(currentPage);
    setTotalPageNumber(totalPages);
  }, [currentPage, totalPages]);

  return (
    <>
      <span className="page-count">
        {page} - {totalPageNumber}
      </span>
      <button className={page > 1 ? 'paginate-button' : 'paginate-button disable'} onClick={() => paginate('prev')}>
        Prev
      </button>
      <button className={page === totalPageNumber ? 'paginate-button disable' : 'paginate-button'} onClick={() => paginate('next')}>
        Next
      </button>
    </>
  );
};

export default Paginate;
