import React from 'react';
import  classNames from 'classnames';

import { getQuestionsData } from '../../actions/getData';
import { showQuestions, showChooseCat } from '../../actions/showQuestionsAction';
class SelectCategory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    fetchQuestions (url) {
        this.props.dispatch(getQuestionsData(url));
        this.props.dispatch(showQuestions(true));
        this.props.dispatch(showChooseCat(false));
    }
    render() {
        const hideCategoryContainer = classNames({
            "categories-cont" : true,
            "js-hide-to-left": !this.props.showChooseCat
        });
        return (
            <section id="categories-container" className={hideCategoryContainer}>
                <article className="categories">
                    <h2 className="categories__headline">Select Category</h2>
                    <ul className="categories__list">
                        <li className="categories__item">
                            <button href="" className="btn btn__select-category" onClick={()=>this.fetchQuestions('HTML')}>HTML</button>
                            </li>
                        <li className="categories__item">
                            <button href="" className="btn btn__select-category" onClick={()=>this.fetchQuestions('CSS')}>CSS</button>
                            </li>
                    </ul>
                </article>
            </section>
        )
    }
}

export default SelectCategory;