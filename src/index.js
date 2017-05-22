import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PostsIndex from './components/PostsIndex';
import PostsNew from './components/PostsNew';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import reducers from './reducers';
import promise from 'redux-promise';

const history = createHistory();
const store = createStore(reducers, applyMiddleware(routerMiddleware(history), promise));

ReactDOM.render(
    <Provider store={store}>
      { /* ConnectedRouter will use the store from Provider automatically */ }
      <ConnectedRouter history={history}>
        <div>
          <Route component={App} />
          <Switch>
            <Route exact path="/" component={PostsIndex} />
            <Route path="/posts/new" component={PostsNew} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
