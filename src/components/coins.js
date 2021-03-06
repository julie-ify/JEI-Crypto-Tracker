/* eslint-disable*/
import { useState } from 'react';
import React from 'react';
import CoinsList from './coinsList';
import { useSelector } from 'react-redux';
import Pagination from './pagination';
import paginate from '../utils/paginate';

const Coins = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 25;
  const coins = useSelector((state) => state.coins);
  const pageList = paginate(coins, currentPage, pageSize);
  const NumberOfPages = Math.ceil(coins && coins.length / pageSize);

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <div>
      <CoinsList coins={pageList} />
      <Pagination NumberOfPages={NumberOfPages} currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  );
};

export default Coins;
