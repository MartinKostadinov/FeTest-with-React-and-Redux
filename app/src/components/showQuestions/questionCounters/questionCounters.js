import React from 'react';

const QuestionCounter = ({ totalCounter, correctCounter })=>{ 
    return (
        <div className="question-count">
            <span className="question-count__current">{correctCounter}</span>
            <span className="question-count__total">{totalCounter}</span>
        </div>
    )
};
QuestionCounter.propTypes = {
    totalCounter : React.PropTypes.number,
    correctCounter : React.PropTypes.number
}
export default QuestionCounter;