import React from 'react';

class AnswersList extends React.Component {
    answersListElements() {
        return this.props.answers.map((value, index) => {
            if (value.valid === true) {
                return <li className={`answer ${this.props.correctStyles}`} key={index}
                    data-valid={value.valid}>{value.answer}</li>;
            }
            else {
                const checkWrong = this.props.wrongStylesIndex === index+1 ? 'js-answer--wrong' : '';
                return <li className={`answer ${checkWrong}`} key={index}
                    data-valid={index+1}>{value.answer}</li>
            }
        });
    }
    render() {
        const answers = this.answersListElements();
        return (
            <ul onClick={this.props.checkCorrect}>
                {answers}
            </ul>
        )
    }
}
AnswersList.propTypes = {
    answers :  React.PropTypes.array,
    correctStyles: React.PropTypes.string,
    checkCorrect: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.func
    ]),
    wrongStylesIndex : React.PropTypes.number,
}
export default AnswersList;