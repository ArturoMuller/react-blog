import React, { Component} from 'react'
import { connect } from 'react-redux'
import Post from './common/PostExcerpt'
import Modal from 'react-modal'
import CreatePost from './CreatePost'
import EditPost from './EditPost'
import { removePost } from '../actions'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DATE = 'DATE';
const VOTE = 'VOTE'


class ListPosts extends Component {

  state = {
    sortby: DATE,
  }

  reduceAllPosts(posts) {
    const allCategories = Object.keys(posts);
    let allPosts = [];
    allCategories.map((categoryId) =>
      Object.keys(posts[categoryId]).map((postId) => {
        let currPost = posts[categoryId][postId];
        allPosts.push(currPost);
      }

      )
    )
    return allPosts;
  }

  render() {
    const {posts, removePost} = this.props;
    const viewCategory = this.props.match.params.category
    const viewId = this.props.match.params.id
    const create = (this.props.match.path === '/createPost'? true: false)
    const edit = (this.props.match.path.includes('/editPost')? true: false)

    let visiblePosts = []
    const postCategories = (viewCategory? (posts[viewCategory]? [viewCategory] : []) : Object.keys(posts));

    visiblePosts = (viewCategory? Object.values(posts[viewCategory]) : this.reduceAllPosts(posts))

    if(this.state.sortby === VOTE){
      visiblePosts.sort((a, b) => a.voteScore - b.voteScore)
    }
    else if(this.state.sortby === DATE){
      visiblePosts.sort((a, b) => a.timestamp - b.timestamp)
    }

    return (
      <div style={{border: '2px solid black'}}>
        <h1> {viewCategory} Posts</h1>
        <button
          onClick={() => this.setState({sortby: VOTE})}>
          Sort By Vote
        </button>
        <button
          onClick={() => this.setState({sortby: DATE})}>
          Sort By Date
        </button>

        <Link to={`/createPost`}>
          <button>
            Create Post
          </button>
        </Link>

        <ul style={{listStyle: 'none'}}>
         {visiblePosts.map((elem, i) => (
           <li>
             <Post post={elem} key={i} removePost={removePost}/>
           </li>
         ))}
       </ul>

       <Modal
         className='modal'
         overlayClassName='overlay'
         isOpen={create}
         contentLabel='Modal'
       >
         <CreatePost addPost={true} categories={postCategories}/>
       </Modal>

       <Modal
         className='modal'
         overlayClassName='overlay'
         isOpen={edit}
         contentLabel='Modal'
       >
         <EditPost category={viewCategory} id={viewId}/>
       </Modal>

      </div>
    )
   }
}

function mapDispatchToProps (dispatch) {
  return {
    removePost: (data) => () => dispatch(removePost(data)),
  }
}


const mapStateToProps = (state, props, context) => ({
  posts: state.posts,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPosts));
