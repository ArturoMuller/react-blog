export const ADD_POST = 'ADD_POST'
export const REMOVE_POST = 'REMOVE_POST'
export const EDIT_POST = 'EDIT_POST'
export const UP_VOTE_POST = 'UP_VOTE_POST'
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT'
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT'

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

export function upVotePost(post) {
  return {
    type: UP_VOTE_POST,
    post,
  }
}

export function downVotePost(post) {
  return {
    type: DOWN_VOTE_POST,
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

export function upVoteComment(comment) {
  return {
    type: UP_VOTE_COMMENT,
    comment,
  }
}

export function downVoteComment(comment) {
  return {
    type: DOWN_VOTE_COMMENT,
    comment,
  }
}
