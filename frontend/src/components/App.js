import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as forumAPI from '../utils/api'
import CreatePost from './CreatePost'
import {addPost, fetchCategories} from '../actions'
import { connect } from 'react-redux'


class App extends Component {

  state = {
    comments : []
  }


  componentDidMount() {
    // forumAPI.getCategories().then((data) => {
    //   // console.group("get categories")
    //   // console.dir(data)
    //   // console.groupEnd("get categories")
    // })
    //
    // forumAPI.getCategoryPosts("react").then((data) => {
    //   // console.group("get Category React Posts")
    //   // console.dir(data)
    //   // console.groupEnd("get Category React Posts")
    // })
    //
    // forumAPI.getPosts().then((data) => {
    //   // console.group("get All Posts")
    //   // console.dir(data)
    //   // console.groupEnd("get All Posts")
    // })
    //
    // forumAPI.getPost("8xf0y6ziyjabvozdd253nd").then((data) => {
    //   // console.group("getPost")
    //   // console.dir(data)
    //   // console.groupEnd("getPost")
    // })
    //
    // forumAPI.upVotePost("8xf0y6ziyjabvozdd253nd").then((data) => {
    //   // console.group("Up Vote")
    //   // console.dir(data)
    //   // console.groupEnd("Up Vote")
    // })
    //
    // forumAPI.downVotePost("8xf0y6ziyjabvozdd253nd").then((data) => {
    //   // console.group("Down Vote")
    //   // console.dir(data)
    //   // console.groupEnd("Up Vote")
    // })
    //
    // forumAPI.editPost({id: "8xf0y6ziyjabvozdd253nd",title: 'xxx', body: 'yyy'}).then((data) => {
    //   // console.group("editPost")
    //   // console.dir(data)
    //   // console.groupEnd("editPost")
    // })
    //
    // forumAPI.getComments("8xf0y6ziyjabvozdd253nd").then((data) => {
    //   // console.group("comments")
    //   // console.dir(data)
    //   // console.groupEnd("comments")
    // })


    forumAPI.getCategories().then((data) => {

      // console.group("get categories")
      // console.dir(data)
      // console.groupEnd("get categories")
    })

  }

  createPost(post) {
    forumAPI.createPost(post).then((data) => {
      debugger
      // console.group("New Post")
      // console.dir(data)
      // console.groupEnd("New Post")
      this.setState({comments: data});
    })
  }

  componentDidMount() {

     fetchCategories();
  }

  // createPost = () => {
  //   this.props.store.dispatch(addPost({category: 'flo',
  //   id: 'lelele', message: this.input.value})
  //   )
  //   this.input.value = ''
  // }

  state = {
    posts: null
  }

  render() {
    const createPost = this.createPost
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{fontSize: '20px'}}>
          CreatePost NOW: <br/>
        </p>
        <div>
          <input
            type='text'
            ref={(input) => this.input = input}
            placeholder='Store Test'/>
          <button onClick={this.createPost}>Create</button>
        </div>
        <p>CREATE POST LATER</p>
        <CreatePost handleSubmit={createPost}/>
      </div>
    );
  }
}

export default connect()(App);
