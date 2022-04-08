import React from 'react';
import { useContext } from "react";
import { QuizContext } from "../../Helpers/Contexts";
import './Alert.css';

const Alert = () => {

    const { flashMessage, setFlashMessage } = useContext(QuizContext)

    return ( 
        <div className={"error-msg" + (flashMessage ? " alert-shown" : " alert-hidden")} 
        onTransitionEnd={() => setFlashMessage(false)}>
            <i className="fa fa-times-circle"></i>
                    Please enter a user name
        </div>
     );
}
 
export default Alert;