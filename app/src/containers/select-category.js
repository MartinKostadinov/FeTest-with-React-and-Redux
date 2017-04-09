import React from 'react';
import { connect } from "react-redux";

import SelectCategory from '../components/selectCategory/selectCategory';
function mapStateToProps(state) {
    return {
        showQuestions: state.showQuestions.showQuestions,
        showChooseCat: state.showQuestions.showChooseCategory
    };
}

export default connect(mapStateToProps)(SelectCategory);