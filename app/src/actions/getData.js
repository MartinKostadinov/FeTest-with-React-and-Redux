import axios from 'axios';
import * as types from './action-types';
export function getQuestionsData(url) {
    return function (dispatch) {
        axios.get('../api/'+url+'.json')
            .then((response) => {
                dispatch({
                    type : types.FETCH_QUESTIONS_FULFILLED,
                    payload: response.data
                    });
            }).then(()=> {
                dispatch({
                    type : types.GET_CURRENT_QUESTION
                });
            })
            .catch((err)=>{
                dispatch({
                    type: 'FETCH_QUESTIONS_REJECTED',
                    payload: err
                });
            });
    };
}