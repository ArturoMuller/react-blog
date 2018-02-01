import React, { Component} from 'react'
import serealizeForm from 'form-serialize'
import v4 from 'uuid'
import { getCategories } from '../utils/api'
import { addPost } from '../actions'
import { connect } from 'react-redux'
import Post from './Post'
import Modal from 'react-modal'
import CreatePost from './CreatePost'
import { removePost } from '../actions'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import { editPost } from '../actions'
const DATE = 'DATE';
const VOTE = 'VOTE'


class EditPost extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    sortby: DATE,
    createPostModalOpen: false,
  }

  componentDidMount(){
    const {post: {body, title}} = this.props;
    this.body.value = body;
    this.title.value = title;
  }

  openCreatePostModal = () => this.setState(() => ({ createPostModalOpen: true }))
  closeCreatePostModal = () => {
    this.setState(() => ({ createPostModalOpen: false }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const values = serealizeForm(e.target, {hash: true});
    this.props.editPost({id: this.props.id,body: values});
    this.props.history.push('/');
  }

  render() {
    const {post: {author, category, body, deleted, title}} = this.props;
    this.title = title;
    this.body = body;
    const {selectDropDown} = this;
    const {addPost} = this.props;
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="create-post-form"
        >

        <div
          style={{fontSize: '10px'}}
          className="create-post-details"
        >
          <div
            style={{float: 'left'}}
            className={'form-element'}
          >
            <label
              htmlFor="author"
            >
              Author
            </label>
            <input
              id='author'
              className="author-post"
              value={author}
              type="text"
              readonly
            />
          </div>
          {/* {selectDropDown()} */}
          <div
            className={'form-element'}
          >
          <input
            ref={input => this.title = input}
            className="title"
            type="text"
            name="title"
            placeholder="title"
          />
          </div>
          <div
            className={'form-element'}
          >
          <textarea
            ref={input => this.body = input}
            className="post"
            type="text"
            name="body"
            placeholder="body"
          />
          </div>
          <div
            className={'form-element'}
          >
            <button>
              {(addPost ? "Add Post": "Edit Post")}
            </button>
          </div>
        </div>
        </form>
          <Link to={'/'}>
            <button>
              Close
            </button>
          </Link>
      </div>
    )
   }
}

function mapDispatchToProps (dispatch, props) {
  return {
    editPost: (data) => dispatch(editPost(data)),
  }
}


const mapStateToProps = (state, props) => {
  const {category, id} = props;
  return {
  post: state.posts[category][id],
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPost));
