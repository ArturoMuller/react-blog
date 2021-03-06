import React, { Component} from 'react'
import { Link } from 'react-router-dom';

class Post extends Component {

  render(){
    const post = this.props.post;
    const removePost = this.props.removePost;
    const time = new Date(post.timestamp);

    return (
      <div style={{paddingLeft: '20px', border: '1px solid black'}} className={'form-element'}>

         <h2>Title: {post.title}  </h2>

         <h2>Category: {post.category} </h2>
         <p style={{display: 'inline', marginRight: '10px'}}>Author: {post.author}</p>
         <p style={{display: 'inline', marginRight: '10px'}}>Post Date: {`${time.getMonth()}-${time.getDay()}-${time.getFullYear()}`} </p>
         <p style={{display: 'inline', marginRight: '10px'}}>Vote Score: {post.voteScore} </p>

        <button onClick={removePost(post)}>Delete Post</button>
        <Link to={`editPost/category/${post.category}/post/${post.id}`}>
          <button>Edit Post</button>
        </Link>
        <Link to={`viewPost/category/${post.category}/post/${post.id}`}>
          <button>View Post</button>
        </Link>
      </div>
    );
  }
}

export default Post;
