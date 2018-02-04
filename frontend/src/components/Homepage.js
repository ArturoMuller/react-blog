import React from 'react';
import ListPosts from './ListPosts';
import Aux from './Aux'
import { connect } from 'react-redux'


const Homepage = ({posts, categories}) => {
  return(
    <Aux>
      <ListPosts />
    </Aux>
  );
}


const mapStateToProps = (state, props) => ({
  categories: state.categories,
  posts: state.posts,
});

export default connect(mapStateToProps)(Homepage);
