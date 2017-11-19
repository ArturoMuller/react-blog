import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers';
import { Provider } from 'react-redux'
import {getCategories} from './utils/api'


const state = {
  posts: {},
  comments: {},
}

const initialstate = (() => {
debugger

const self = this;
getCategories().then(res => {
  self.state.categories = res;
})

})();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer, initialstate ,

    applyMiddleware(ReduxThunk)

)

console.dir(store.getState())
ReactDOM.render(
  <BrowserRouter >
   <Provider store={store}>
    <App store={store}/>
   </Provider>
   </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
