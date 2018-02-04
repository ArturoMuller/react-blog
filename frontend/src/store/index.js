import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/';
import {loadState, saveState} from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result
}

const persistedState = loadState();


const store = createStore(reducers, persistedState, composeEnhancers(applyMiddleware(thunk, logger)));

store.subscribe(() => {
  saveState({
    posts: store.getState().posts,
    comments: store.getState().comments,
    categories: store.getState().categories
  });
});


export default store;
