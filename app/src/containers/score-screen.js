import React from 'react';
import { connect } from 'react-redux';

import ShowFinalScore from '../components/finalScore/finalScore';
function mapStateToProps(state) {
    return {
        visible: state.questions.finalScoreVisible,
        totalQuestions: state.questions.totalQuestions,
        correctQeustions: state.questions.correctQuestionsCounter

    };
}

export default connect(mapStateToProps)(ShowFinalScore);