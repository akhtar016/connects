import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const people = [
    {name: 'AB de Villiers', email:'abd@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/987410090532597760/g_6uAxKw_400x400.jpg"},
    {name: 'Rohit Sharma', email:'rohit@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/767862037921738752/79mqV-6l_400x400.jpg"},
    {name: 'Tamim Iqbal Khan', email:'tamim@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/709636701363109889/SGpBOwwV_400x400.jpg"},

    {name: 'Mushfiqur Rahim', email:'musfiq@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1218937235438858245/V8WDef6R_400x400.jpg"},
    {name: 'Virat Kohli', email:'virat@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1192077703609868289/huwMRG1W_400x400.jpg"},
    {name: 'Shakib Al Hasan', email:'sakib@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1133083380394991616/ISgUjSsA_400x400.jpg"},

    {name: 'Dale Steyn', email:'steyn@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/684080046747860992/C-Qt7lWy_400x400.jpg"},
    {name: 'Shane Watson', email:'watson@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1184308632512413696/mu2g5FGR_400x400.jpg"},
    {name: 'Glenn Maxwell', email:'maxwell@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/584650965963280384/GbHkOlKK_400x400.jpg"},
    
    {name: 'Steve Smith', email:'smith@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/955589526268755968/GCFvb2h__400x400.jpg"},
    {name: 'David Warner', email:'warner@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1145739496744542214/bxqrk2ls_400x400.jpg"},
    {name: 'Kevin Pietersen', email:'petersen@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1203217092872290304/MTqdVxT8_400x400.jpg"},

    {name: 'Michael Clarke', email:'clarke@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/908915612356829184/E736s8lL_400x400.jpg"},
    {name: 'Shane Warne', email:'warne@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1165201957633609728/tyhp6A4n_400x400.jpg"},
    {name: 'Sachin Tendulkar', email:'sachin@mail.com', phone:'123456', info:'Professional Cricket player',
    yearlyIncome:'$1200',imgLink:"https://pbs.twimg.com/profile_images/1213102659126755329/lDT4zy8C_400x400.jpg"}
  
]

return (
  <div>


    <Header></Header>


    {
      people.map(p=> <Players player={p}></Players>)
    }
    
     
     
      
      
    
  </div>
);
}


const navStyle = {

  backgroundColor: "black",
  lineHeight: "40px",
  fontSize: "20px"
}

const aStyle = {
  textDecoration: 'none',
    color: 'white',
    marginRight: '20px',
    padding: '5px'
}



function Header(){


return(<div style={{textAlign:'center'}}>

<h1 style={{color:'salmon'}}>Connect</h1>

<nav style={navStyle}>

  <a style={aStyle} href="/profile">Profile</a>
    <a style={aStyle} href="/find-friends">Find Friends</a>
    <a style={aStyle} href="/manage-connects">Manage Connects</a>
</nav>

</div>
)
  
}


function Players(props){

const {name,imgLink,info,email,yearlyIncome,phone} = props.player;

const playerCardStyle={
  width: '300px',
	height: '480px',
	background: '#FFF',
  borderRadius: '10px',
  boxShadow: '0px 1px 10px 1px gray',
	overflow: 'hidden',
  display: 'inline-block',
  margin:'10px'
}

const upCardStyle = {

  height: '150px',
	background: '#53d4bc'
}

const imageStyle = {
  background: 'white',
	width: '80px',
	height: '80px',
	borderRadius: '50%',
	padding: '5px',
	transform: 'translate(100px,100px)'
}

const imgStyle = {
	width: '80px',
	height: '80px',
  borderRadius: '50%'
}

const lowerPartStyle = {

  height: '280px',
	background: '#FFF',
	padding: '20px',
	paddingTop: '40px',
	textAlign: 'center'
}

const buttonStyle = {


  padding: '12px 20px',
	background: '#53d4bc',
	border: 'none',
	color: 'white',
	borderRadius: '30px',
	fontSize: '15px',
	textDecoration: 'none',
	fontWeight: 'bold',
	transition: 'all .3s ease-in'
}




  return (

  

<div style={playerCardStyle}>



<div style={upCardStyle}>
  <div style={imageStyle}>
    <img style={imgStyle} src={imgLink} alt=""/>
  </div>
</div>

<div style={lowerPartStyle}>
  <div>
    <h3>{name}</h3>
    <h4>{info}</h4>
    <hr/>
  </div>
  <div style={{textAlign:'left'}}>

    <p><b>Email: </b>{email}</p>
  <p><b>Phone: </b>{phone}</p>
    <p><b>Annual Salary: </b>{yearlyIncome}</p>
  </div>
  <div>
    <button style={buttonStyle}>Connect <span style={{fontSize:'15px'}}> &#43;</span></button>
  </div>
  
</div>



</div>




 
    

  




    


  )

  }








  

export default App;
