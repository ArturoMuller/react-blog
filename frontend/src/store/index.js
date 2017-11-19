import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postReducer from '../reducers/';

const store = () => createStore(postReducer, applyMiddleware(thunk));

export default store;

// State shape

// Categories
// ['a' , 'b', 'c']

// Posts Key is Category
// {'a': {1 :{id: 1,
//        timeStamp: '232323',
//        title: '2323',
//        body: 'message bla bla bla',
//        author: 'Arturo',
//        category: 'a',
//        voteScore: 2},}

// }
//
// Comments Key is Post ID
// {1: [{id: 1,
//       parentId: 1,
//       timeStamp: '2323',
//       body: 'message bla bla bla',
//       author: 'Arturo',
//       voteScore: 1,}]}
//

//
// }
