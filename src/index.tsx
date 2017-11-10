import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import history from './routerHistory';


import { bracketApp } from './reducers';
import App from './components/App';


import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(bracketApp, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/:id?' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
