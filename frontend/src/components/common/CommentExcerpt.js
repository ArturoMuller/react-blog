import React, { Component} from 'react'
import { Link } from 'react-router-dom';

class Comment extends Component {

  render(){
    const {author, timestamp, voteScore, parentId, id, body} = this.props.comment;
    const time = new Date(timestamp);
    return (
      <div style={{paddingLeft: '20px', border: '1px solid black'}} className={'form-element'}>
         <p style={{display: 'block', marginRight: '10px'}}>Author: {author}</p>
         <p style={{display: 'block', marginRight: '10px'}}>Comment Date: {`${time.getMonth()}-${time.getDay()}-${time.getFullYear()}`} </p>
         <p style={{display: 'block', marginRight: '10px'}}>Vote Score: {voteScore} </p>
         <p style={{display: 'block', marginRight: '10px'}}>Body: {body}</p>

        <button onClick={() => {'undefined'}}>Delete Comment</button>
        <Link to={`editComment/post/${parentId}/comment/${id}`}>
          <button>Edit Comment</button>
        </Link>
      </div>
    );
  }
}

export default Comment;
