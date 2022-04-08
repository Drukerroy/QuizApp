import React from 'react';
import { useState, useContext } from 'react';
import { QuizContext } from '../../Helpers/Contexts';
import {decode} from "html-entities";
import Timer from "../Timer/Timer";
import './Quiz.css';

const Quiz = (props) => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState("")
    const [timer, setTimer] = useState(0)
    const questions = props.questions
    const { score, setScore, setGameState, userName, gamesPlayedByUser, setGamesPlayedByUser } = useContext(QuizContext)

    const nextQuestion = () => {
        if (questions[currentQuestion].correct_answer === optionChosen) {
            setScore(score + 1)
        }
        setTimer(prevState => prevState + 1)
        setCurrentQuestion(currentQuestion + 1)
        setOptionChosen("")
    }

    const finishQuiz = () => {
        if (questions[currentQuestion].correct_answer === optionChosen) {
            setScore(score + 1)
        }

        let gamesPlayedArray = sortArrayByScore(gamesPlayedByUser.concat(
            [[userName, score, new Date().toLocaleTimeString()]]))
        setGamesPlayedByUser(gamesPlayedArray)

        setGameState("EndScreen")
        setOptionChosen("")
    }

    const sortArrayByScore = (array) => {
        return array.sort((array1, array2) => {return array2[1] - array1[1]})
    }

    return ( 
        <div className="QuizContainer">
            <div className="score-counter">
                <p className="score-text">CORRECT: {score} / 5</p>
            </div>
            <div className="Quiz">
                <div className="text-container">
                    <h3> {decode(questions[currentQuestion].question)} </h3>
                </div>
                <div className="options">
                    {questions[currentQuestion].all_questions.map((option, index) =>
                        <button key={index} className={
                            "quiz-button" + ((optionChosen !== "") && (option === questions[currentQuestion].correct_answer) ? ' correct-answer' : '')
                            + ((optionChosen === option) && (option !== questions[currentQuestion].correct_answer) ? ' wrong-answer' : '') +
                            ((optionChosen !== "") ? ' option-picked' : '')
                        } onClick={() => setOptionChosen(option)}> 
                        {decode(option)} </button>
                        )}
                </div>
            </div>
            <Timer 
            onTimesUp={nextQuestion} timer={timer} setTimer={setTimer} optionChosen={optionChosen}
            nextQuestion={nextQuestion} finishQuiz={finishQuiz} currentQuestion={currentQuestion}
            />
        </div>
     );
}
 
export default Quiz;