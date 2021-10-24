import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Coins from './components/coins';
import { fetchCoinsData } from './redux/reducers/coinsReducer';
import store from './redux/store';
import Loader from './components/loader';

function App() {
  useEffect(() => {
    store.dispatch(fetchCoinsData());
  });
  const loading = useSelector((state) => state.loading);
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          {loading ? <Loader /> : null}
          <Coins />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
