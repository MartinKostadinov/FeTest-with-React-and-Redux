import React from 'react';
const BtnNextQuestion =({styles,nextQuestion})=> {    
        return(
            <button className ={styles} onClick={nextQuestion}>Next</button>
        )
}

export default BtnNextQuestion;