import React, { useState, useEffect } from 'react';
import classes from './QuestionUi.module.css';

const QuestionUI = (props) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [correctAns, setCorrectAns] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  props.setCorrectAnswer(correctAns);

  props.setWrongAnswer(wrongAnswer);


  const questions = props.quiz[activeQuestion];


  // Check if questions is defined before accessing its properties
  const choices = questions ? questions.choices: [];
  const question = questions ? questions.question : '';
  const correctAnswer = questions ? questions.correctAnswer : '';
  
  const clickNextQuest = () => {
    if (activeQuestion !== props.quiz.length - 1) {
      setSelectedAnswer(null);
      setActiveQuestion((state) => state + 1);
    } else {
      setActiveQuestion(0);
      props.setConditionFinish(true);
    }
  };

  const clickOptions = (option, index) => {
    setSelectedAnswer(index);
    if (option === correctAnswer) {
      setCorrectAns((state) => state + 1);
    } else {
      setWrongAnswer((state) => state + 1);
    }
  };

  const clickAddQuestbtn = () => {
    props.setAddQuestModal(true);
  };

  return (
    <div>
      <div className={classes.questionBox}>
        <div className={classes.addquestBox}>
          <h1> Question {activeQuestion + 1}</h1>
          <button onClick={clickAddQuestbtn}>Add to Questions</button>
        </div>

        <div className={classes.question}>{question}</div>

        {props.quiz.length > 0 ? (
          <div>
            <ul className={classes.list}>
              {choices.map((option, index) => {
                return (
                  <li
                    onClick={() => {
                      clickOptions(option, index);
                    }}
                    key={index}
                    className={selectedAnswer === index ? classes.activeBtn : null}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          "Loading..."
        )}

        <div className={classes.btnBox}>
          <button onClick={clickNextQuest}>
            {activeQuestion === props.quiz.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionUI;
