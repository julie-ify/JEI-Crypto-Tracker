/* eslint-disable*/
import React from 'react';
import numberWithCommas from '../utils/truncFunc'

const CoinsList = (props) => {
  const { coins } = props;
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Symbol</th>
          <th scope="col">24h High</th>
          <th scope="col">24h Low</th>
          <th scope="col">24h Vol(BTC)</th>
          <th scope="col">24h Vol(USDT)</th>
          <th scope="col">24h PriceChange</th>
        </tr>
      </thead>
      <tbody>
        {coins &&
          coins.map((coin) => (
            <tr>
              <th scope="row">1</th>
              <td>{coin.symbol}</td>
              <td>{coin.highPrice}</td>
              <td>{coin.lowPrice}</td>
              <td>{numberWithCommas(coin.volume)}</td>
              <td>{numberWithCommas(coin.quoteVolume)}</td>
              <td className={coin.priceChangePercent >= 0 ? "text-success" : "text-danger"}>{coin.priceChangePercent}%</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CoinsList;
