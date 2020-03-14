import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const people = [
    {name: 'AB de Villiers', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/987410090532597760/g_6uAxKw_400x400.jpg"},
    {name: 'Rohit Sharma', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/767862037921738752/79mqV-6l_400x400.jpg"},
    {name: 'Tamim Iqbal Khan', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/709636701363109889/SGpBOwwV_400x400.jpg"},

    {name: 'Mushfiqur Rahim', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1218937235438858245/V8WDef6R_400x400.jpg"},
    {name: 'Virat Kohli', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1192077703609868289/huwMRG1W_400x400.jpg"},
    {name: 'Shakib Al Hasan', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1133083380394991616/ISgUjSsA_400x400.jpg"},

    {name: 'Dale Steyn', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/684080046747860992/C-Qt7lWy_400x400.jpg"},
    {name: 'Shane Watson', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1184308632512413696/mu2g5FGR_400x400.jpg"},
    {name: 'Glenn Maxwell', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/584650965963280384/GbHkOlKK_400x400.jpg"},
    
    {name: 'Steve Smith', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/955589526268755968/GCFvb2h__400x400.jpg"},
    {name: 'David Warner', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1145739496744542214/bxqrk2ls_400x400.jpg"},
    {name: 'Kevin Pietersen', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1203217092872290304/MTqdVxT8_400x400.jpg"},

    {name: 'Michael Clarke', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/908915612356829184/E736s8lL_400x400.jpg"},
    {name: 'Shane Warne', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1165201957633609728/tyhp6A4n_400x400.jpg"},
    {name: 'Sachin Tendulkar', email:'@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1213102659126755329/lDT4zy8C_400x400.jpg"}
  
]

return (
  <div>
    <header>
      <Players product={people[0]}></Players>
     
      
      
    </header>
  </div>
);
}



function Players(props){

const {name,imgLink,info} = props.product;




  return <div>




    <img src={imgLink} alt=""/>



    <h4>{name}</h4>
    

    <p>{info}</p>
    
  </div>

}








  

export default App;
