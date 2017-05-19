import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostIndex from './components/PostsIndex';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware,  push } from 'react-router-redux';

import reducers from './reducers';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(combineReducers({ ...reducers, router: routerReducer }), applyMiddleware(middleware));

ReactDOM.render(
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */ }
      <ConnectedRouter history={history}>
        <div>
          <Route exact path="/" component={App}/>
          <Route exact path="/" component={PostIndex}/>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
