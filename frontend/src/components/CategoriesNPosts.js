import React from 'react';
import ListCategories from './ListCategories';
import {  Route } from 'react-router-dom'
import ListPosts from './ListPosts';
import Homepage from './Homepage'

const CategoriesNPosts = ({children}) => {
  return (
    <div>
      <ListCategories/>
      <Route exact path="/" component={ListPosts} />
      <Route path="/categories/:category" component={ListPosts} />
      <Route path="/editPost/category/:category/post/:id" component={ListPosts} />
      <Route path="/createPost" component={ListPosts} />
    </div>
  );
};

export default CategoriesNPosts;
