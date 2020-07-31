import React from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css';

import GlobalStyle from './styles/globalStyle'
import Routes from './routes'
import Store from './store/index'

function App() {
  return (
    <Provider store={Store}>
      <Router history={createBrowserHistory()}>
          <Switch>
            <Route component={Routes} />
          </Switch>
      </Router>
      <GlobalStyle/>
    </Provider>
  );
}

export default App;
