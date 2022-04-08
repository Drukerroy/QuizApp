import React from 'react';
import { useContext, useState } from 'react';
import { QuizContext } from '../../Helpers/Contexts';
import Alert from '../Alert/Alert';
import './MainMenu.css';

const MainMenu = () => {
    
    const [flashMessage, setFlashMessage] = useState(false)
    const { setGameState, userName, setUserName } = useContext(QuizContext)
    
    const handleNameChange = (event) => {
        setUserName(event.target.value)
    }

    const startGame = async() => {
        if (userName.length) {
            setGameState("Quiz")
        } 
        else {
            setFlashMessage(true)
        }
    }

    return ( 
        <div className="Menu">
            <QuizContext.Provider value={{ flashMessage, setFlashMessage }}>
                {<Alert />}
            </QuizContext.Provider>
            <div className="form__group field">
                <input type="input" value={userName} onChange={handleNameChange} 
                className="form__field" placeholder="Name" id="name" />
                <label htmlFor="name" className="form__label">User Name</label>
            </div>
            <button id="btn" onClick={startGame}>
               Start Quiz
            </button>
        </div>
     );
}
 
export default MainMenu;