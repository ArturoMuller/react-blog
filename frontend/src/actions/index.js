import * as API from '../utils/api'

export const ADD_POST = 'ADD_POST'
export const FETCH_POSTS = 'FETCH_POSTS'

export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";


export const getPosts = () => (dispatch, getState) => {
  dispatch({
    type: FETCH_POSTS
  })
}


export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function removePost(post){
  return {
    type: REMOVE_POST,
    post,
  }
}

export function editPost(post) {
  return {
    type: EDIT_POST,
    post,
  }
}

export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    comment,
  }
}

export function removeComment(comment){
  return {
    type: REMOVE_COMMENT,
    comment,
  }
}

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    comment,
  }
}

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  API
      .getCategories()
      .then(categories => dispatch(receiveCategories(categories)))
);
