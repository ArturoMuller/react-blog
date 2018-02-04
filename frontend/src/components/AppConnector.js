import App from './App';
import { connect } from 'react-redux'
import { fetchCategories, fetchPosts, fetchComments } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
  }
}

export default connect(null,
  mapDispatchToProps
)(App);
