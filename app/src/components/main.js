import React from 'react';
import SelectCategory from '../containers/select-category';
import ShowQuestions from '../containers/questions-container';
import ShowFinalScore from '../containers/score-screen';

class Main extends React.Component {
    render() {
        return (
            <main>
               <SelectCategory />
               <ShowQuestions />
               <ShowFinalScore />
            </main>
        )
    }
}

export default Main;
