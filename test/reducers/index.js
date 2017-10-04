import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
  EDIT_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT
} from '../actions'

function postReducer(state = {}, action){
  const post = action.post
  const {id} = post

  switch(post) {
    case ADD_POST:
      return {..state,
                [id] : {
                  post
                }
              }
    case REMOVE_POST:
      let {id, ...rest} = state;
      return rest
    case EDIT_POST:
      return {..state,
                [id] : {
                  post
                }
      }
    case UP_VOTE_POST:
      return {..state,
                [id] : {
                  post
                }
      }
    case DOWN_VOTE_POST:
      return {..state,
              [id] : {
                post
              }
      }
    default:
      return state
  }

}

export default postReducer