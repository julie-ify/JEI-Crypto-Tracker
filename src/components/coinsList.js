import React from 'react';
import { useSelector } from 'react-redux';

const CoinsList = () => {
  const coins = useSelector((state) => state.coins);
  return (
    <ul>
      {coins && coins.map((coin) => <li key={coin.symbol}>{coin.symbol}</li>)}
    </ul>
  );
};

export default CoinsList;
