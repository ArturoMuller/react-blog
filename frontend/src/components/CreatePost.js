import React, { Component} from 'react'
import serealizeForm from 'form-serialize'
import v4 from 'uuid'
import {getCategories} from '../utils/api'
import {addPost} from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";

class CreatePost extends Component {
  constructor(props){
    super(props)
    this.selectDropDown = this.selectDropDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const { author = '', category = '', title = '', body = ''} = (this.props.post? this.props.post : '');
    this.category.value = category;
    this.author.value = author;
    this.title.value = title;
    this.body.value = body;
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const values = serealizeForm(e.target, {hash: true})
    values.id = v4();
    values.timestamp = Date.now();
    values.voteScore = 0;
    this.props.createPost(values);
    this.props.history.push('/');
  }


  selectDropDown(category = ''){
    return(
      <div
        style={{float: 'left', paddingLeft: '20px'}}
        className={'create-post-form'}
      >
        <label
          htmlFor='category'
        >
          Category
        </label>
        <select
          name={'category'}
          id='category'
          ref={input => this.category = input}
        >
          <option>
            Select...
          </option>
            {this.props.categories.map((elem, i) =>

                <option
                  key={i}
                  value={elem.path}>
                  {elem.name}
                </option>
            )}
        </select>
      </div>
    )
  }

  render() {
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
              ref={input => this.author = input}
              type="text"
              name="author"
            />
          </div>
          {selectDropDown()}
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

const mapStateToProps = (state, props) => ({
  categories: state.categories,
});

function mapDispatchToProps (dispatch, props) {
  return {
    createPost: (data) => dispatch(addPost(data)),
  }
}

export default withRouter(connect(
  mapStateToProps, mapDispatchToProps
)(CreatePost))
