import {applyMiddleware, createStore, compose} from 'redux';


import logger from "redux-logger";
import thunk from "redux-thunk";

import questions from './reducers/index';

const middleware = applyMiddleware(thunk);

 const store = createStore(questions,middleware);
export default store;
// import {applyMiddleware, createStore, compose} from 'redux';


// import logger from "redux-logger";
// import thunk from "redux-thunk";

// import questions from './reducers/index';

// const middleware = applyMiddleware(thunk,logger());

//  const store = createStore(questions,compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) );
// export default store;