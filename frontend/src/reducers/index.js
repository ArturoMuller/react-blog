import { combineReducers } from 'redux';

import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  RECEIVE_CATEGORIES,
  RECEIVE_POSTS,
  RECEIVE_COMMENTS,
} from '../actions'

const initialPostState = {

}

function posts(state = initialPostState, action) {
  const { payload } = action
  debugger;
  switch(action.type) {
    case RECEIVE_POSTS:
      const postObj = payload.reduce((obj, item) => {
        obj = {...obj,
                  [item.category]: {
                    ...obj[item.category], [item.id]: item
                  }
              }
        return obj
      }, {});
      return postObj;
    case ADD_POST:
        return { ...state,
                    [payload.category]: {...state[payload.category],
                      [payload.id]: payload }
               }
    case REMOVE_POST:
      const {[payload.id]:id, ...rest} = state[payload.category]
      return {...state,
                [payload.category]: rest
             }
    case EDIT_POST:
      return { ...state,
                [payload.category]: {...state[payload.category],
                  [id]: payload}
             }
    default:
      return state
  }

}

function comments(state = {}, action){
  const { payload } = action;
  if(payload){
    var { id, parentId } = payload;
  }
  switch(action.type) {
    case RECEIVE_COMMENTS:
      const commentsObj = payload.reduce((obj, item) => {
        obj = {...obj,
                  [parentId]: {
                    ...obj[parentId], [item.id]: item
                  }
              }
        return obj
      }, {});
     return commentsObj;
    case ADD_COMMENT:
      return { ...state,
                [parentId]: { ...state[parentId],
                  [id]: payload
                }
             }
    case REMOVE_COMMENT:
      const {id, ...rest} = state[parentId]
      return {...state,
                [parentId]: rest
             }
    case EDIT_COMMENT:
      return { ...state,
                [parentId]:
                 {...state[parentId],
                   [id]: payload}
             }
    default:
      return state
  }

}


function categories(state = [], action){
const categoriesObj = action.payload
  if(categoriesObj){
    var categoriesArray = categoriesObj.categories;
  }
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return  [...state].concat(categoriesArray)
    default:
      return state
  }
}

export default combineReducers({
  posts,
  comments,
  categories
});
