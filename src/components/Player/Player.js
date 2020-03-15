import React from 'react';
import './Player.css'

const Player = (props) => {

    console.log(props);

    const{name,imgLink,info,email,phone, yearlyIncome} = props.player;


    return (  

       <div className="card">
           <img src={imgLink} alt="" width='100%'/>
           <h1>{name}</h1>
           <p>{info}</p>
           <hr/>
           <div className="info">
            <p><b>Email: </b>{email}</p>
            <p><b>Phone: </b>{phone}</p>
            <p><b>Annual Salary: </b>{yearlyIncome}</p>
           </div>
           <p><button>Connect</button></p>
       </div>
       
    );
};

export default Player;