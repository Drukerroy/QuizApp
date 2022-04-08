import React from 'react';
import './LeaderBoard.css';

const LeaderBoard = (props) => {
    return ( 
        <div>
            <table className="rwd-table">
                <thead>
                    <tr>
                    <th>Position</th>
                    <th>Username</th>
                    <th>Score</th>
                    <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.gamesPlayedByUser.map((tr, index) =>
                    <tr key={index}>
                        <td key={index + 1} data-th="Position"> {index + 1} </td>
                        <td key={index + 2} data-th="Username"> {tr[0]} </td>
                        <td key={index + 3} data-th="Score"> {tr[1]} / 5 </td>
                        <td key={index + 4} data-th="Time"> {tr[2]} </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
     );
}
 
export default LeaderBoard;