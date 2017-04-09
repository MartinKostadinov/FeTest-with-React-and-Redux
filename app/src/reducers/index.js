import { combineReducers } from 'redux';
import questions from './main-reducer';
import showQuestions from './reducer-showQuestions';
export default combineReducers({
   questions,
   showQuestions
});

