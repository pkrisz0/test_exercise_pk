import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Address from './containers/Address';
import store from './store';

const App = () => (
  <div>
    <Address />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
