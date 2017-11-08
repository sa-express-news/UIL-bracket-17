import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { bracketApp } from './reducers';

import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(bracketApp, composeWithDevTools(
  applyMiddleware(thunkMiddleware),
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
