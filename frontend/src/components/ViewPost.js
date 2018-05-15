import React, { Component} from 'react'
import serealizeForm from 'form-serialize'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchComments, addComment, editComment } from '../actions'
import Comment from './common/CommentExcerpt';

class ViewPost extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchComments(this.props.postId);

  }


  render() {
    const {comments, post} = this.props
    const commentKeys = Object.keys(comments);
    return (
      <div>
        {/* <PostNComments/> */}
        {/* <Route exact path="/" component={ListPosts} />
        <Route path="/categories/:category" component={ListPosts} />
        <Route path="/editPost/category/:category/post/:id" component={Homepage} />
        <Route path="/createPost" component={Homepage} /> */}
        <div>
            <h1>Post</h1>
                <div
                  style={{fontSize: '10px'}}
                  className="create-post-details"
                >
                  <div
                    className={'form-element'}
                  >
                    <label
                      htmlFor="author"
                    >
                      Author
                    </label>
                    <input
                      id='author'
                      className="title"
                      value={post.author}
                      type="text"
                      disabled
                    />
                  </div>
                  <div
                    className={'form-element'}
                  >
                  <label
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    value={post.title}
                    className="title"
                    type="text"
                    name="title"
                    placeholder="title"
                  />
                  </div>
                  <div
                    className={'form-element'}
                  >
                  <label
                    htmlFor="body"
                  >
                    Body
                  </label>
                  <textarea
                    value={post.body}
                    className="post"
                    type="text"
                    name="body"
                    placeholder="body"
                    disabled
                  />
          </div>
        </div>
        <div className='comments'>
          <h1>Comments</h1>
          {commentKeys && commentKeys.map(key => (
            <div>
              <Comment comment={comments[key]} />
            </div>
          ))}
        </div>

      </div>
    </div>
    )
   }
}

const mapStateToProps = (state, props) => {
  const {id, category} = props.match.params;
  return {
    comments: state.comments[id] || {},
    post: state.posts[category][id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: (postId) => dispatch(fetchComments(postId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewPost));
