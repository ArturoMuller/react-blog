import { combineReducers } from 'redux';

import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  RECEIVE_CATEGORIES,
} from '../actions'

const initialPostState = {

}

function posts(state = initialPostState, action) {
  const post = action.post
  if(post){
  var {id} = post
  var { category } = post
  }
  switch(action.type) {
    case ADD_POST:
        return { ...state,
                    [category]: {...state[category],
                      [id]: post }
               }
    case REMOVE_POST:
      const {id, ...rest} = state[category]
      return {...state,
                [category]: rest
             }
    case EDIT_POST:
      return { ...state,
                [category]: {...state[category],
                  [id]: post}
             }
    default:
      return state
  }

}

function comments(state = {}, action){
const comment = action.comment
if (comment) {
  var {id, parentId} = comment
}
const post = action.post
  switch(action.type) {
    case ADD_COMMENT:
      return { ...state,
                [parentId]: { ...state[parentId],
                  [id]: comment
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
                   [id]: comment}
             }
    default:
      return state
  }

}


function categories(state = {}, action){
  debugger
const categories = action.categories

const comments = action.comments
  switch(action.type) {
    case RECEIVE_CATEGORIES:
      debugger
      return { ...state, comments
             }
    default:
      return state
  }

}

export default combineReducers({
  posts,
  comments,
  categories
});
