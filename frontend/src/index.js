import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers';
import { Provider } from 'react-redux'
import {getCategories} from './utils/api'
import App from './components/App'
import CreatePost from './components/CreatePost'
import store from './store'




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



ReactDOM.render(

   <Provider store={store}>
     <App />
   </Provider>

, document.getElementById('root'));
registerServiceWorker();
