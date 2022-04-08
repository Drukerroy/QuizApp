import React from 'react';
import { useContext } from 'react';
import { QuizContext } from '../../Helpers/Contexts';
import logo from '../../Assets/Celebration.gif';
import './EndScreen.css';

const EndScreen = (props) => {

    const { score, userName, setGameState, setScore, setOpenModal } = useContext(QuizContext)

    const restartQuiz = () => {
        props.getAllQuestions()
        setScore(0)
        setGameState("Menu")
    }

    return ( 
        <div>
            <button id="leaderboard" onClick={() => {setOpenModal(true)}}> LeaderBoard </button>
            <div className="EndScreen">
                <h2> Great job {userName} ! </h2>
                <img className="celebration" src={logo} alt="Celebration" />
                <h2> {score} / 5 </h2>
                <button id="btn" onClick={restartQuiz}> Restart Quiz </button>
            </div>
        </div>
     );
}
 
export default EndScreen;