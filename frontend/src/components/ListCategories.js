import React, { Component} from 'react';
import serealizeForm from 'form-serialize';
import v4 from 'uuid';
import {getCategories} from '../utils/api';
import {addPost} from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const ListCategories = ({categories}) => {
  return (
    <div style={{border: '2px solid black'}}>
      <h1>Categories</h1>
      <ul style={{listStyle: 'none'}}>
        <li key={0}>
          <Link to={'/'}> all </Link>
        </li>
        {categories.map((elem,i) =>
          <li key={i}>
            <Link to={`/categories/${elem.path}`}>{elem.name}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  categories: state.categories,
});

export default connect(mapStateToProps)(ListCategories);
