import * as types from './action-types.js';

export function showQuestions (status){
    return {
        type : types.DISPLAY_QUESTIONS,
        payload : status
    };
}

export function showChooseCat (status){
    return {
        type: types.CHOOSE_CATEGORY_STATUS,
        payload: status
    };
}