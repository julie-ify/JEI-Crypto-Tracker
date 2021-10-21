const FETCH_COINS = 'crypt_tracker/coins/FETCH_COINS';

const initialState = [];

export const fetchCoins = (payload) => {
  type: FETCH_COINS, payload;
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
