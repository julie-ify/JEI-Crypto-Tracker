import { useEffect } from 'react';
import Coins from './components/coins';
import { fetchCoinsData } from './redux/reducers/coinsReducer';
import store from './redux/store';

function App() {
  useEffect(() => {
    store.dispatch(fetchCoinsData());
  });
  return (
    <div className="App container">
      <Coins />
    </div>
  );
}

export default App;
