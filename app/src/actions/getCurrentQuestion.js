import * as types from './action-types';

export function getCurrentCount (){
    return {
        type : types.GET_CURRENT_QUESTION
    };
}

export function correctCounterToZero () {
    return {
        type: types.SET_CORRECT_QUESTIONS_COUNT_ZERO
    };
}

export function saveCorrectAnswersScore () {
    return {
        type : types.CORRECT_QUESTIONS_COUNT
    };
}

export function incQuestionCount (value){
    return {
        type: types.SET_CURRENT_QUESTION_COUNT,
        payload: value
    };
}

export function showEndScore (status) {
    return {
        type: types.SHOW_END_SCORE,
        payload: status
    };
}