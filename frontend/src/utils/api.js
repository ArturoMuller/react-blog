/**
* API info available at
* https://github.com/udacity/reactnd-project-readable-starter/tree/master/api-server
*/

const api = process.env.REACT_APP_BACKEND || 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/**
 * Get all of the categories available for the app
 * @returns {Array} of categories
 */
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())

/**
* Get all of the posts for a particular category
* @param {String} Category
* @returns {Array} categories
*/
export const getCategoryPosts = (path) =>
  fetch(`${api}/${path}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
* Get all of the posts
* @returns {Array} post objects
*/
export const getPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
* Add a new post
* @param {Object} body all posts title author body and category
* @returns {Object}
*/
export const createPost = (body) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())

/**
* Get the details of a single post.
* @param {String} id
* @returns {Object}
*/
export const getPost = (id) =>
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
* Used for UP voting a post.
* @param {String} id
* @returns {Object}
*/
export const upVotePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option : 'upVote'})
  }).then(res => res.json())

/**
* Used for Down voting a post.
* @param {String} id
* @returns {Object}
*/
export const downVotePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option : 'downVote'})
  }).then(res => res.json())

/**
* Edit the details of an existing post.
* @param {Object} content which includes title and body
* @returns {Object}
*/
export const editPost = (content) =>
  fetch(`${api}/posts/${content.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  }).then(res => res.json())

/**
* Sets the deleted flag for a post to 'true'.
* Sets the parentDeleted flag for all child comments to 'true'
* @param {Object} post
* @returns {Object}
*/
export const removePost = (post) =>
fetch(`${api}/posts/${post.id}`, { method: 'DELETE', headers })
  .then(res => res.json())
  .then(data => data.comment)


/**
* Get all the comments for a single post.
* @param {String} id
* @returns {Array}
*/
export const getComments = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
* Add comment to a post.
* @param {Object} body UUID, timeStamp, body, author, parentID
* @returns {Object} the comment object
*/
export const createComment = (body) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())

/**
* Get the details for a single comment
* @param {String} ID the comment ID
* @returns {Object} the comment object
*/
export const getComment = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
* Used for UP voting a Comment.
* @param {String} id
* @returns {Object}
*/
export const upVoteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option : 'upVote'})
  }).then(res => res.json())

/**
* Used for Down voting a comment.
* @param {String} id
* @returns {Object}
*/
export const downVoteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({option : 'downVote'})
  }).then(res => res.json())

/**
* Edit the details of an existing Comment.
* @param {Object} content which includes title and body
* @returns {Object}
*/
export const editComment = (content) =>
  fetch(`${api}/comments/${content.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  }).then(res => res.json())

  /**
  * Sets the delete flag to true for an existing Comment.
  * @param {Object} comment
  * @returns {Object}
  */
  export const removeComment = (comment) =>
  fetch(`${api}/comments/${comment.id}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.comment)
