import * as API from '../utils/api'

export const ADD_POST = 'ADD_POST'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const RECEIVE_COMMENTS = 'RECIEVE_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const CHANGE_CATEGORY = "CHANGE_CATEGORY";
export const CLEAR_CATEGORY = "CLEAR_CATEGORY";

export const fetchPosts = () => (dispatch, getState) => {
  API.getPosts().then((posts) => {
    return dispatch({
      type: RECEIVE_POSTS,
      payload: posts
    }
  )}
)}

export const addPost = (post) => (dispatch) => {
  API.createPost(post).then((newPost) => {
    console.log(newPost)
    return dispatch({type: ADD_POST,
    payload: newPost,})
  })
}

export const removePost = (post) => (dispatch) => {
  API.removePost(post).then(() => {
    return dispatch({type: REMOVE_POST,
        payload: post,})
  })
}

export const editPost = (post) => (dispatch) => {
  API.editPost(post).then((post) => {
  debugger;
  return dispatch({
    type: EDIT_POST,
    payload: post,})
  })
}

export const fetchComments = () => (dispatch, getState) => {
  API.getComments().then((Comments) => {
    return dispatch({
      type: RECEIVE_COMMENTS,
      payload: Comments
    }
  )}
  )}


export function addComment(comment) {
  return {
    type: ADD_COMMENT,
    payload: comment,
  }
}

export function removeComment(comment){
  return {
    type: REMOVE_COMMENT,
    payload: comment,
  }
}

// export const = editComment = () =>  editComment(comment) {
//   return {
//     type: EDIT_COMMENT,
//     comment,
//   }
// }

export function editComment(comment) {
  return {
    type: EDIT_COMMENT,
    payload: comment,
  }
}

export const fetchCategories = () => (dispatch, getState) => {
  API.getCategories().then((categories) => {
    return dispatch({ type: RECEIVE_CATEGORIES, payload: categories})}
  )
}
