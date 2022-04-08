import React from 'react';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import './Modal.css';

const Modal = (props) => {
    return ( 
        <div className="modal-background">
            <div className="modal-container">
                <div className="title-close-btn">
                    <button onClick={() => props.closeModal(false)}> X </button>
                </div>
                <div className="modal-title">
                    <h3 className="title-container"> LeaderBoard </h3>
                </div>
                <div className="modal-body">
                    <LeaderBoard gamesPlayedByUser={props.gamesPlayedByUser}/>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;
