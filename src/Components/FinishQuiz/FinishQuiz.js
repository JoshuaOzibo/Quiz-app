import React, { useState } from 'react';
import classes from './FinishQuiz.module.css';

const FinishQuiz = ({wrongAnswer, correctAnswer, totalNumberOfQuestions, clickBack}) => {

  const [showPassed, setShowPassed] = useState("");

  let passMark = totalNumberOfQuestions / 2;
  
  const showPacent = correctAnswer >= passMark ? 'Passed' : 'Failed';

  return (
    <div className={classes.quizParent}>
        <div className={classes.centerQuizFinish}>
            <div>
                <h3>Total Correct Answers: {correctAnswer}</h3>
                <h3>Total Wrong Answers: {wrongAnswer}</h3>
                <h3>Total Questions: {totalNumberOfQuestions}</h3>
                <h3>Score percent: {correctAnswer/100 * totalNumberOfQuestions}% <span>{showPacent}</span></h3>

                <div className={classes.backBtn}>
                  <button onClick={clickBack}>Back to Quiz</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FinishQuiz;