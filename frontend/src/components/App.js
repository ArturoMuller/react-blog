import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as forumAPI from '../utils/api'
import CreatePost from './CreatePost'



class App extends Component {



  componentDidMount() {
    forumAPI.getCategories().then((data) => {
      console.group("get categories")
      console.dir(data)
      console.groupEnd("get categories")
    })

    forumAPI.getCategoryPosts("react").then((data) => {
      console.group("get Category React Posts")
      console.dir(data)
      console.groupEnd("get Category React Posts")
    })

    forumAPI.getPosts().then((data) => {
      console.group("get All Posts")
      console.dir(data)
      console.groupEnd("get All Posts")
    })

    forumAPI.getPost("8xf0y6ziyjabvozdd253nd").then((data) => {
      console.group("getPost")
      console.dir(data)
      console.groupEnd("getPost")
    })

    forumAPI.upVotePost("8xf0y6ziyjabvozdd253nd").then((data) => {
      console.group("Up Vote")
      console.dir(data)
      console.groupEnd("Up Vote")
    })

    forumAPI.downVotePost("8xf0y6ziyjabvozdd253nd").then((data) => {
      console.group("Down Vote")
      console.dir(data)
      console.groupEnd("Up Vote")
    })

    forumAPI.editPost({id: "8xf0y6ziyjabvozdd253nd",title: 'xxx', body: 'yyy'}).then((data) => {
      console.group("editPost")
      console.dir(data)
      console.groupEnd("editPost")
    })

    forumAPI.getComments("8xf0y6ziyjabvozdd253nd").then((data) => {
      console.group("comments")
      console.dir(data)
      console.groupEnd("comments")
    })



    //delete goes last so leave for later

  }

  createPost(post) {
    forumAPI.createPost(post).then((data) => {
      console.group("New Post")
      console.dir(data)
      console.groupEnd("New Post")
    })
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
        <p>
          Talking to the backend yields these categories: <br/>
        </p>
        <CreatePost handleSubmit={createPost}/>
      </div>
    );
  }
}

export default App;
