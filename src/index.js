import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Increment from './Increment';

import reducers from './reducers';

const store = createStore(reducers);

const increment = () => ({
  type: 'INCREMENT',
  payload: {},
});

store.subscribe(() => {
  const state = store.getState();
  ReactDOM.render(
    <Increment count={state} dispatch={store.dispatch} increment={increment} />,
    document.getElementById('root')
  );
});

ReactDOM.render(
  <Increment count={0} dispatch={store.dispatch} increment={increment} />,
  document.getElementById('root')
);
