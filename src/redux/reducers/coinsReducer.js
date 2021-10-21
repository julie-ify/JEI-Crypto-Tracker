const FETCH_COINS = 'crypto_tracker/coins/FETCH_COINS';

const initialState = {
  coins: [],
};

export const fetchCoins = (payload) => ({
  type: FETCH_COINS,
  payload,
});

export const fetchCoinsData = () => async (dispatch) => {
  const response = await fetch('https://api.binance.com/api/v1/ticker/24hr');
  const result = await response.json();
  const filter = result.filter((r) => r.symbol.includes('USDT'));
  dispatch(fetchCoins(filter));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return {
        ...state,
        coins: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
