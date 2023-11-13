import React, { useState, useEffect } from 'react';
import QuestionUI from '../QuestionUI/QuestionUI';

export const QuestionsApi = () => {
  const [QuestionsData, setQuestionsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://questions-storage-default-rtdb.firebaseio.com/.json");
        const data = await response.json();
        setQuestionsData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return QuestionsData;
}


// export const quiz = [
//     {
//       question: 'Which function is used to serialize an object into a JSON string in Javascript?',
//       choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
//       type: 'MCQs',
//       correctAnswer: 'stringify()',
//     },
//     {
//       question: 'Which of the following keywords is used to define a variable in Javascript?',
//       choices: ['var', 'let', 'var and let', 'None of the above'],
//       type: 'MCQs',
//       correctAnswer: 'var and let',
//     },
//     {
//       question:'Which of the following methods can be used to display data in some form using Javascript?',
//       choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
//       type: 'MCQs',
//       correctAnswer: 'All of the above',
//     },
//     {
//       question: 'How can a datatype be declared to be a constant type?',
//       choices: ['const', 'var', 'let', 'constant'],
//       type: 'MCQs',
//       correctAnswer: 'const',
//     },
//   ];
