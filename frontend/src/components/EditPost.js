import React, { Component} from 'react'
import serealizeForm from 'form-serialize'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { editPost } from '../actions'
import PropTypes from 'prop-types';

class EditPost extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const {post: {body, title}} = this.props;
    this.body.value = body;
    this.title.value = title;
  }

  handleSubmit(e) {
    e.preventDefault();
    const values = serealizeForm(e.target, {hash: true});
    this.props.editPost(values);
    this.props.history.push('/');
  }

  render() {
    const {post: {author, body, title}} = this.props;
    this.title = title;
    this.body = body;
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
              value={author}
              type="text"
              disabled
            />
          </div>
          {/* {selectDropDown()} */}
          <div
            className={'form-element'}
          >
            <label
              htmlFor="title"
            >
              Title
            </label>
          <input
            ref={input => this.title = input}
            id='title'
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
            ref={input => this.body = input}
            className="post"
            id='body'
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
            <button className={'close'}>
              Close
            </button>
          </Link>
      </div>
    )
   }
}

EditPost.propTypes = {
  editPost: PropTypes.func
}

function mapDispatchToProps () {
  return {
    editPost: (data) => editPost(data),
  }
}


const mapStateToProps = (state, props) => {
  const {category, id} = props;
  return {
    post: state.posts[category][id]
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPost));
