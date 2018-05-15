import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const ListCategories = ({categories, posts, children}) => {
  const availableCategories = categories.filter(elem => posts[elem.path]);
  return (
    <div>
    <div style={{border: '2px solid black'}}>
      <h1>Categories</h1>
      <ul style={{listStyle: 'none'}}>
        <li key={0}>
          <Link to={'/'}> all </Link>
        </li>
        {availableCategories.map((elem) =>
          <li key={elem.path}>
            <Link to={`/categories/${elem.path}`}>{elem.name}</Link>
          </li>
        )}
      </ul>
    </div>
    {children}
  </div>
  );
};


const mapStateToProps = (state) => {
  return ({
    categories: state.categories,
    posts: state.posts,
  })
};

export default withRouter(connect(mapStateToProps)(ListCategories));
