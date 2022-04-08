import React, { useState, useEffect } from 'react';
import Modal from './Components/Modal/Modal';
import MainMenu from './Components/MainMenu/MainMenu';
import EndScreen from './Components/EndScreen/EndScreen';
import Quiz from './Components/Quiz/Quiz';
import { QuizContext } from './Helpers/Contexts';
import axios from "axios";
import ParticlesBackground from './Components/ParticlesBackground/ParticlesBackground';
import './App.css';

const App = () => {

  const [gameState, setGameState] = useState("Menu");
  const [allQuestions, setAllQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [userName, setUserName] = useState("")
  const [gamesPlayedByUser, setGamesPlayedByUser] = useState([])
  const [modal, setOpenModal] = useState(false)

  useEffect(() => {
      getAllQuestions()
  },[])

  const getAllQuestions = async() => {

      await axios.get('https://opentdb.com/api.php?amount=100')
      .then((response) => {
          setAllQuestions(getValidArray(response.data.results.slice(0, 6)))
      })
  }

  const getValidArray = (questionsArray) => {

    let allQuestionsArray = []

    for (let i = 0; i < questionsArray.length - 1; i++) {
      allQuestionsArray = [questionsArray[i].correct_answer].concat(questionsArray[i].incorrect_answers)
      questionsArray[i].all_questions = shuffleArray(allQuestionsArray)
    }
    
    return questionsArray
  }

  const shuffleArray = (array) =>  {

    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }

    return array
  }

  return (
    <div>
      {modal && <Modal closeModal={setOpenModal} gamesPlayedByUser={gamesPlayedByUser}/>}
      <div className="particles-container">
          <ParticlesBackground />
      </div>
      <div className="App">
        <div className="title-wrapper">
          <h1>
            Quiz Game
          </h1>
        </div>
        <main>
          <QuizContext.Provider value={{ gameState, setGameState, score, setScore, userName, 
            setUserName, setOpenModal, gamesPlayedByUser, setGamesPlayedByUser }}>
            {gameState === "Menu" && <MainMenu />}
            {gameState === "Quiz" && <Quiz questions={allQuestions}/>}
            {gameState === "EndScreen" && <EndScreen getAllQuestions={getAllQuestions}/>}
          </QuizContext.Provider>
        </main>
      </div>
    </div>
  );
}

export default App;
