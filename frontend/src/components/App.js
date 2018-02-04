import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import '../App.css';
import * as forumAPI from '../utils/api'
import Homepage from './Homepage'
import ListPosts from './ListPosts';
import ListCategories from './ListCategories';
import EditPost from './EditPost';

class App extends Component {

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchPosts();
    this.props.fetchComments();
  }

  createPost(post) {
    forumAPI.createPost(post).then((data) => {
      this.setState({comments: data});
    })
  }

  render() {
    return (
      <BrowserRouter >
        <div>
          <ListCategories />
            <Route exact path="/" component={ListPosts} />
            <Route path="/categories/:category" component={ListPosts} />
            <Route path="/editPost/category/:category/post/:id" component={Homepage} />
            <Route path="/createPost" component={Homepage} />
            <Route path="/viewPost/category/:category/post/:id" component={EditPost} />
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  fetchCategories: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  fetchComments: PropTypes.func.isRequired
}

export default App;
