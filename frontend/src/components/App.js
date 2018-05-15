import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types';
import '../App.css';
import * as forumAPI from '../utils/api'
import ViewPost from './ViewPost';
import Homepage from './Homepage'
import ListPosts from './ListPosts';
import ListCategories from './ListCategories';
import CategoriesNPosts from './CategoriesNPosts';

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
          <Switch>
            <Route path="/viewPost/category/:category/post/:id" component={ViewPost} />
            <Route path="/" component={CategoriesNPosts} />
          </Switch>Í
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
