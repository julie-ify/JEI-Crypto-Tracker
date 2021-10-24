const FETCH_COINS = 'crypto_tracker/coins/FETCH_COINS';
const FETCH_LOADING = 'crypto_tracker/coins/FETCH_LOADING';

const initialState = {
  loading: true,
  coins: [],
};

export const fetchCoins = (payload) => ({
  type: FETCH_COINS,
  payload,
});

export const fetchLoading = () => ({
  type: FETCH_LOADING,
});

export const fetchCoinsData = () => async (dispatch) => {
  dispatch(fetchLoading);
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
    case FETCH_LOADING:
      return {
        loading: true,
        coins: [...state.coins],
      };
    default:
      return state;
  }
};

export default reducer;
