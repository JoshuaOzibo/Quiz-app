import React, {useState,useEffect} from 'react';
import FinishQuiz from '../FinishQuiz/FinishQuiz';
import QuestionUI from '../QuestionUI/QuestionUI';
import AddQuestBtn from '../AddquestBtn/AddQuestBtn';
import AddQuestModal from '../AddquestBtn/addQuestModal';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDgwKI3mQMoKx7HvQbhg2sF4VB5Q2zhdZY",
  authDomain: "questions-storage.firebaseapp.com",
  databaseURL: "https://questions-storage-default-rtdb.firebaseio.com",
  projectId: "questions-storage",
  storageBucket: "questions-storage.appspot.com",
  messagingSenderId: "764781197818",
  appId: "1:764781197818:web:013bed8c0429c78cddcc43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const MapQuest = () => {

    const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    const databaseRef = ref(database, 'questions');

    get(databaseRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setQuiz(Object.values(data));
        }
      })
      .catch((error) => {
        console.error('Error getting data:', error);
      });
  }, []);

  const [correctAnswer, setCorrectAnswer] = useState("")
  const [wrongAnswer, setWrongAnswer] = useState("")
  const [conditionFinish, setConditionFinish] = useState(false);

  const [showAddQuestModal, setAddQuestModal] = useState(false);

const totalNumberOfQuestions = quiz.length;

const [newCorrectAns, setNewCorrectAns] = useState(correctAnswer)
const [newWrongAns, setNewWrongAns] = useState(wrongAnswer)

const clickBack =() =>{// Back to quiz btn function
  setConditionFinish(false);
  setNewCorrectAns(0);
  setNewWrongAns(0);
}

const clickAddQuestion =() =>{

}

const ClickOverlay =() =>{
  setAddQuestModal(false)
}


  return (
    <React.Fragment>

    {showAddQuestModal && <AddQuestModal ClickOverlay={ClickOverlay}>
      <AddQuestBtn clickAddQuestion={clickAddQuestion} /> 
      
      </AddQuestModal>}

        {!conditionFinish && <QuestionUI 
        setWrongAnswer={setWrongAnswer} 
        setCorrectAnswer={setCorrectAnswer} 
        setConditionFinish={setConditionFinish}
        setAddQuestModal={ setAddQuestModal}
        quiz={quiz}
        />}

       {conditionFinish && <FinishQuiz 
       totalNumberOfQuestions={totalNumberOfQuestions} 
       correctAnswer={correctAnswer} 
       wrongAnswer={wrongAnswer} 
       clickBack={clickBack}
       quiz={quiz}
       />}
    </React.Fragment>
  )
};

export default MapQuest;