import * as types from '../actions/action-types';
const initialState = {
    showQuestions: false,
    showChooseCategory: true
};
const showQuestionsReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.DISPLAY_QUESTIONS:
            return Object.assign({}, state, { showQuestions: action.payload });

        case types.CHOOSE_CATEGORY_STATUS:
            return Object.assign({}, state, { showChooseCategory: action.payload });
        default:
            return state;
    }

}

export default showQuestionsReducer;