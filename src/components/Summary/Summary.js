import React from 'react';
import "./Summary.css"

const Summary = (props) => {

    const playerList = props.playerList;


    let totalSalary =0;

    for (let i = 0; i< playerList.length; i++){
        const player = playerList[i];
        const yearInc = Number(player.yearlyIncome);
        
        totalSalary = totalSalary + yearInc ;

    }




    return (
        <div className="summaryComponent">
            <div className="summary">

            <h1>{playerList.length}</h1>   
        <button>Total Friends</button>
        </div>


        <div className="summary">

            <h1>${totalSalary}</h1>   
            <button>Total Annual Salary</button>
        </div>






            
        </div>
    );
};

export default Summary;