import React, { Component} from 'react'
import serealizeForm from 'form-serialize'
import v4 from 'uuid'
import {getCategories} from '../utils/api'
import {addPost} from '../actions'
import { connect } from 'react-redux'
import Post from './Post'
import Modal from 'react-modal'
import CreatePost from './CreatePost'
import { removePost } from '../actions'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router'
import {editPost} from '../actions'
const DATE = 'DATE';
const VOTE = 'VOTE'


class ViewPost extends Component {
  constructor(props){
    super(props)
  }
  state = {
    sortby: DATE,
    createPostModalOpen: false,
  }

  openCreatePostModal = () => this.setState(() => ({ createPostModalOpen: true }))
  closeCreatePostModal = () => {
    this.setState(() => ({ createPostModalOpen: false }))
  }

  render() {
    const {posts} = this.props;

    const category = this.props.match.params.category
    const id = this.props.match.params.id
    debugger;
    // const path = (this.props.match.path === '/createPost'? true: false)

     const post = posts[category][id];



    return (
      <div style={{border: '2px solid black'}}>
        <h1>Post {post.title}</h1>

        <Link to={`/createPost`}>
          <button>
            Edit Post
          </button>
        </Link>
        <div style={{float: 'left', paddingLeft: '20px'}} className={'create-post-form'}>
          <label htmlFor='category'>Category</label>

        </div>

       <Modal
         className='modal'
         overlayClassName='overlay'
        //  isOpen={path}
         contentLabel='Modal'
       >

       </Modal>

      </div>
    )
   }
}

function mapDispatchToProps (dispatch) {
  return {
    editPost: (data) => () => dispatch(editPost(data)),
  }
}


const mapStateToProps = (state, props) => ({
  posts: state.posts,
  comments: state.comments,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewPost));
