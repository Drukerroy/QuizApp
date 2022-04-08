import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './Timer.css';

const Timer = (props) => {

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {

          if (props.currentQuestion === 4 ) {
            props.finishQuiz()
          }
          else{
            props.nextQuestion()
          }

          return <div className="timer-text">Times Up...</div>;
        }
      
        return (
          <div className="remain-time-wrapper">
            <div className="remain-time">{remainingTime}</div>
          </div>
        )
      }

  return (
    <div className="timer">
      <div className="next-question-wrapper">
        {props.currentQuestion === 4 ? (
                  <button id="btn" onClick={props.finishQuiz}> Finish Quiz </button>
              ) : (
                  <button id="btn" onClick={props.nextQuestion}> Next Question </button>
              )}
      </div>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          key={props.timer}
          isPlaying={props.optionChosen === "" ? true : false}
          duration={10}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}

export default Timer;