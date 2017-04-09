import * as types from '../actions/action-types';
const initialState = {
    questionsData: [],
    currentQuestionText: '',
    currentAnswersArr: [],
    correctQuestionsCounter: 0,
    totalQuestions: null,
    questionsCount: 1,
    finalScoreVisible: false
};
export default function (state = initialState, action) {
    switch (action.type) {
        case types.FETCH_QUESTIONS_FULFILLED:
            return Object.assign({}, state, {
                questionsData: action.payload,
                totalQuestions: action.payload.questions.length
            });

        case types.SET_CURRENT_QUESTION_COUNT:
            let updateQuestionsCounter;
            if (action.payload === 'INC') {
                updateQuestionsCounter = state.questionsCount + 1;
            } else {
                updateQuestionsCounter = 1;
            }

            return Object.assign({}, state, { questionsCount: updateQuestionsCounter });

        case types.GET_CURRENT_QUESTION:
            const questionValue = state.questionsData.questions.filter(function (element, index) {
                if (index === state.questionsCount - 1) {
                    return element;
                }
            });
            return Object.assign({}, state,
                {
                    currentQuestionText: questionValue[0].question,
                    currentAnswersArr: questionValue[0].answers
                });

        case types.CORRECT_QUESTIONS_COUNT:
            const updateCount = state.correctQuestionsCounter + 1;
            return Object.assign({}, state, { correctQuestionsCounter: updateCount });

        case types.SET_CORRECT_QUESTIONS_COUNT_ZERO:
            const correctCounterZero = 0;
            return Object.assign({}, state, { correctQuestionsCounter: correctCounterZero });

        case types.SHOW_END_SCORE:
            return Object.assign({}, state, { finalScoreVisible: action.payload });

        default:
            return state;
    }
}