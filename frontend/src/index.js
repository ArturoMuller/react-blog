import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import AppConnector from './components/AppConnector'
import store from './store'


ReactDOM.render(

   <Provider store={store}>
     <AppConnector />
   </Provider>

, document.getElementById('root'));
registerServiceWorker();
