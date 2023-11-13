import React, {useState,useEffect} from 'react';
import MapQuest from './Components/MapQuest/MapQuest'
import {QuizApi} from './Components/QuestionsApi/QuestionsApi';
import QuestionUI from './Components/QuestionUI/QuestionUI';
import QuestionApi from './Components/QuestionsApi/QuestionsApi';
const App = (props) => {

  return (
    <div>
      {/* <QuizApi /> */}
      <MapQuest />
      {/* <QuestionUI  /> */}
    </div>
  )
}

export default App