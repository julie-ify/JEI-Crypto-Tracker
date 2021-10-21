/* eslint-disable*/
import { useState } from 'react';
import React from 'react';
import CoinsList from './coinsList';
import { useSelector } from 'react-redux';
import Pagination from './pagination';

const Coins = () => {
  const [pageSize, setPageSize] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const coins = useSelector((state) => state.coins);
  const NumberOfPages = Math.ceil(coins && coins.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <div>
      <Pagination NumberOfPages={NumberOfPages} currentPage={currentPage} handlePageChange={handlePageChange} />
      <CoinsList />
    </div>
  );
};

export default Coins;
