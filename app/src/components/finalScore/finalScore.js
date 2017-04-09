import React from 'react';
import classNames from 'classnames';

import { showChooseCat } from '../../actions/showQuestionsAction';
import { showEndScore,incQuestionCount, correctCounterToZero } from '../../actions/getCurrentQuestion';

class ShowFinalScore extends React.Component {
    constructor(props){
        super(props);
        this.backToHomeScreen = this.backToHomeScreen.bind(this);
    }
    backToHomeScreen () {
        this.props.dispatch(showChooseCat(true));
        this.props.dispatch(showEndScore(false));
        this.props.dispatch(incQuestionCount('DEC'));
        this.props.dispatch(correctCounterToZero());
    }
    render () {
        const finalScoreStatus = classNames({
            'score-section ': true,
            'js-hide-to-left': this.props.visible,
            'js-hidden': !this.props.visible,
            'js-show-from-right': this.props.visible
        });
        return (
            <section>
                <article id="final-score" className={finalScoreStatus}>
                    <h2 className="score-section__title">FINAL SCORE</h2>
                    <div className="score-section__score ">
                        <span className="score-section__score__val">{this.props.correctQeustions}</span>
                        <span className="score-section__score__total">{this.props.totalQuestions}</span>
                    </div>
                    <button className="btn btn__back-home" onClick={this.backToHomeScreen}>Back to Home</button>
                </article>
            </section>
        )
    }
}
ShowFinalScore.propTypes = {
    backToHomeScreen: React.PropTypes.func,
    correctQeustions: React.PropTypes.number,
    totalQuestions: React.PropTypes.number,
    visible: React.PropTypes.bool
}
export default ShowFinalScore;