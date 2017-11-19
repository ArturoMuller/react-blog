import React, { Component} from 'react'
import serealizeForm from 'form-serialize'
import v4 from 'uuid'
import {getCategories} from '../utils/api'
import {addPost} from '../actions'
import { connect } from 'react-redux'



class CreatePost extends Component {
  constructor(props){
    super(props)
    this.selectDropDown = this.selectDropDown.bind(this)
  }
  state = {
    categories: []
  }

  handleSubmit = (e) => {
    debugger
    e.preventDefault()
    const values = serealizeForm(e.target, {hash: true})
    values.id = v4()


    this.props.store.dispatch(addPost(values))
    this.category = ''
    this.author = ''
    this.title = ''
    this.body = ''
    }

  componentDidMount(){
    const self = this
    getCategories().then(res => {
      this.setState({categories : res})

    });
  }

  selectDropDown(){
    return(
      <div style={{float: 'left', paddingLeft: '20px'}} className={'form-element'}>
        <label htmlFor='category'>Category</label>
        <select name={'category'} id='category' ref={input => this.category = input}>
          <option value={1}>Select...</option>
            {this.state.categories.map((elem, i) =>
              <option key={i} value={elem.path}>{elem.name}</option>
            )}
        </select>
      </div>
    )
  }


  render() {
    const {selectDropDown} = this;
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-post-form">
        <div style={{fontSize: '10px'}} className="create-post-details">
          <div style={{float: 'left'}} className={'form-element'}>
            <label
              htmlFor="author">
              Author
            </label>
            <input
              id='author'
              className="author-post"
              ref={input =>
                this.author = input}
              type="text"
              name="author" />
          </div>
          {selectDropDown()}
          <div className={'form-element'}>
          <input ref={input => this.title = input} className="title" type="text" name="title" placeholder="title"/>
          </div>
          <div className={'form-element'}>
          <textarea ref={input => this.body = input} className="post" type="text" name="body" placeholder="body"/>
          </div>
          <div className={'form-element'}>
          <button>Add Post</button>
          </div>
        </div>
        </form>
      </div>
    )
  }
}

export default CreatePost

// const mapStateToProps =  (state, props) => ({
//   categories: CreatePost.state.categories
// });
//
// function mapDispatchToProps (dispatch) {
//   return {
//     selectRecipe: (data) => dispatch(addRecipe(data)),
//     remove: (data) => dispatch(removeFromCalendar(data))
//   }
// }
//
//
// export default connect(
//   mapStateToProps
// )(CreatePost)
