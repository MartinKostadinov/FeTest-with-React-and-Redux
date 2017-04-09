import React from 'react';
import { connect } from "react-redux";

import ShowQuestions from '../components/showQuestions/showQuestionsComponent';
function mapStateToProps(state) {
    return {
        showQuestions: state.showQuestions.showQuestions,
        questionsCount: state.questions.questionsCount,
        currQuestionVal: state.questions.currentQuestionText,
        currAnswerArr: state.questions.currentAnswersArr,
        totalQuestions: state.questions.totalQuestions
    };
}

export default connect(mapStateToProps)(ShowQuestions);