import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Player.css';


const Player = (props) => {

    

    const{name,imgLink,info,email,phone, yearlyIncome} = props.player;


    return (  <div className= "cardPosition">

<div className="card">
           <img src={imgLink} alt="" width='100%'/>
           <h1>{name}</h1>
           <p>{info}</p>
           <hr/>
           <div className="info">
            <p><b>Email: </b>{email}</p>
            <p><b>Phone: </b>{phone}</p>
            <p><b>Annual Salary: </b> <span>$</span>{yearlyIncome}</p>
           </div>
           <p><button
                
                onClick={()=> props.handleAddPlayer(props.player)}
                
                ><FontAwesomeIcon icon={faPlus} /></button></p>
       </div>


    </div>
        


        

       
       
    );
};

export default Player;