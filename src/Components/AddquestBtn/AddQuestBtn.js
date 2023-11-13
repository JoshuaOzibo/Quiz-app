import React from 'react';

import classes from '../AddquestBtn/addQuestmodal.module.css';
import { useState } from 'react';
const AddQuestBtn = () => {
    const [QuestionInput, setQuestionInput] = useState("");
    const [CorrectAnswerInput, setCorrectAnswerInput] = useState("");

    //Correct Answers state;
    const [choicesA, setChoicesA] = useState("")
    const [choicesB, setChoicesB] = useState("")
    const [choicesC, setChoicesC] = useState("")
    const [choicesD, setChoicesD] = useState("")




    // Choices Functions
    const changechoicesA = (e) =>{
        setChoicesA(e.target.value)
    }
    const changechoicesB = (e) =>{
        setChoicesB(e.target.value)
    }
    const changechoicesC = (e) =>{
        setChoicesC(e.target.value)
    }
    const changechoicesD = (e) =>{
        setChoicesD(e.target.value)
    }


    
    const changeQuestionData =(e) =>{ // function for Questions
        setQuestionInput(e.target.value);
    }

    const changeCorrectAnswer =(e) =>{ // function for correct Answer
        setCorrectAnswerInput(e.target.value);
    }

 
    const  submitedFormData = async (event) =>{
        event.preventDefault();
        

        const getInputDatas = {
            choices: [choicesA, choicesB, choicesC, choicesD],
            correctAnswer: CorrectAnswerInput,
            question: QuestionInput,
        }

        
            const response = await fetch('https://questions-storage-default-rtdb.firebaseio.com/questions/.json', {
                method: 'POST',
                body: JSON.stringify(getInputDatas),
                headers: {
                    'Content-Type':'application/json'
                }
        });
        const data = response.json();


        
        setQuestionInput('');
        setCorrectAnswerInput('');
        setChoicesA('')
        setChoicesB('')
        setChoicesC('')
        setChoicesD('')

    }

  return (
        <form onSubmit={submitedFormData}>
            <div>
                <div className={classes.questionDiv}>
                    <label>Question:</label><br />
                    <textarea value={QuestionInput} name="QuestionInput" id="textarea" placeholder='Questions' onChange={changeQuestionData}></textarea>
                </div>


                <div className={classes.choicesBox}>
                <label>Choices:</label>
                    <div className={classes.box}>
                        
                        <div>
                            <input value={choicesA} onChange={changechoicesA} type="text" placeholder='Choice A' />
                            <input value={choicesB} onChange={changechoicesB} type="text" placeholder='Choice B' />
                        </div>
                        <div className={classes.boxright}>
                            <input value={choicesC} onChange={changechoicesC} type="text" placeholder='Choice C' />
                            <input value={choicesD} onChange={changechoicesD} type="text" placeholder='Choice D'/>
                        </div>
                    </div>
                </div>

                <div className={classes.correctansBtn}>
                    <label>CorrectAnswer:</label>
                    <br/>
                    <input value={CorrectAnswerInput} onChange={changeCorrectAnswer} type="text" placeholder='input Answer to the above question' />
                </div>

                <div className={classes.AddBtnBox}>
                    <input type="submit" value="Add Question"/>
                </div>
            </div>
        </form>
  )
}

export default AddQuestBtn