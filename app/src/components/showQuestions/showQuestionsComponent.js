import React from 'react';
import classNames from 'classnames';

import { saveCorrectAnswersScore, incQuestionCount, getCurrentCount, showEndScore } from '../../actions/getCurrentQuestion';
import { showQuestions } from '../../actions/showQuestionsAction';

import BtnNextQuestion from './btnNext/btnNextComponent';
import AnswersList from './answers/answersComponent';
import QuestionCounter from './questionCounters/questionCounters';

class ShowQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correct: false,
            idForWrongClass: 0,
            btnNextQuestion: false,
        };
        this.checkIfCorrect = this.checkIfCorrect.bind(this);
        this.showNextQuestion = this.showNextQuestion.bind(this);
    }
    checkIfCorrect(e) {
        if (!e.target.classList.contains('answer')) {
            return false;
        }
        this.setState({ answersList: true });
        if (e.target.getAttribute('data-valid') === 'true' && this.state.answersList !== 'undefined') {
            this.setState({ correct: true });
            this.props.dispatch(saveCorrectAnswersScore());
        } else {
            const wrongId = e.target.getAttribute('data-valid');
            this.setState({ correct: true });
            this.setState({ idForWrongClass: +wrongId });
        }
        this.setState({ btnNextQuestion: true });
    }
    showNextQuestion() {
        if (this.props.questionsCount < this.props.totalQuestions) {
            this.props.dispatch(incQuestionCount('INC'));
            this.props.dispatch(getCurrentCount());
        } else {
            this.props.dispatch(showEndScore(true));
            this.props.dispatch(showQuestions(false));
        }
        this.setState({ btnNextQuestion: false });
        this.setState({ correct: false });
        this.setState({ idForWrongClass: 0 });
    }

    render() {
        const questionValue = this.props.currQuestionVal;
        const currQuestionNum = this.props.questionsCount;
        const totalQuestionsNum = this.props.totalQuestions;
        const showQuestionsContainer = classNames({
            test: true,
            "js-hide-to-left": this.props.showQuestions,
            'js-hidden': !this.props.showQuestions,
            'js-show-from-right': this.props.showQuestions
        });
        const showBtnNext = classNames({
            btn: true,
            'btn__next': true,
            'js-btn__next--hidden': !this.state.btnNextQuestion
        });
        const correctAnswerStyles = classNames({
            "js-answer--correct": this.state.correct
        });
        return (
            <section id="test-container" className={showQuestionsContainer}>
                <article className="question-container">
                    <p className="question">{questionValue}</p>
                    <AnswersList
                        correctStyles={correctAnswerStyles}
                        wrongStylesIndex={this.state.idForWrongClass}
                        answers={this.props.currAnswerArr}
                        checkCorrect={!this.state.btnNextQuestion ? this.checkIfCorrect : null} />
                    <QuestionCounter
                        totalCounter={totalQuestionsNum}
                        correctCounter={currQuestionNum} />
                    <BtnNextQuestion
                        styles={showBtnNext}
                        nextQuestion={this.showNextQuestion} />
                </article>

            </section>
        )
    }
}
ShowQuestions.propTypes = {
    currAnswerArr: React.PropTypes.array,
    currQuestionVal: React.PropTypes.string,
    showQuestions : React.PropTypes.bool,
    questionsCount : React.PropTypes.number,
    totalQuestions: React.PropTypes.number
}
export default ShowQuestions;