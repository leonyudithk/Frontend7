import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css'
import AppRouter from './routers/AppRouter'
import { store } from './components/redux/store/store'
 import { Provider } from 'react-redux';

 ReactDOM.render(
  <Provider store={store}>
     <AppRouter />
  </Provider>,
 document.getElementById('root')
);

