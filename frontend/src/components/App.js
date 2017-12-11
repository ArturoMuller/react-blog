import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as forumAPI from '../utils/api'
import CreatePost from './CreatePost'
import { addPost } from '../actions'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import Homepage from './Homepage'
import { fetchCategories, fetchPosts, fetchComments } from '../actions'
import ListPosts from './ListPosts';
import ListCategories from './ListCategories';
import ViewPost from './ViewPost';

class App extends Component {

  state = {
    categories: [],
    posts: [],
  }

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
    this.props.fetchComments();
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
      <BrowserRouter>
        <div>
          <ListCategories />
            <Route exact path="/" component={ListPosts} />
            <Route path="/categories/:category" component={ListPosts} />
            <Route path="/createPost" component={Homepage} />
            <Route path="/category/:category/post/:id" component={ViewPost} />

        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}


function mapDispatchToProps (dispatch) {
  return {
    fetchCategories: () => {dispatch(fetchCategories())},
    fetchPosts: () => {dispatch(fetchPosts())},
    fetchComments: () => {dispatch(fetchComments())},
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
