import React, { Component} from 'react'
import serealizeForm from 'form-serialize'
import v4 from 'uuid'

class CreatePost extends Component {
  handleSubmit = (e) => {
    console.log(e.target);
    e.preventDefault()
    const values = serealizeForm(e.target, {hash: true})
    values.id = v4()
    console.log(values)
    if(this.props.handleSubmit)
       this.props.handleSubmit(values)
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="create-post-form">
        <div className="create-post-details">

          <input className="author-category" type="text" name="author" placeholder="author"/>
          <input className="author-category" type="text" name="category" placeholder="category"/>
          <input className="title" type="text" name="title" placeholder="title"/>
          <textarea className="post" type="text" name="body" placeholder="body"/>

          <button>Add Post</button>
        </div>
        </form>
      </div>
    )
  }
}

export default CreatePost
