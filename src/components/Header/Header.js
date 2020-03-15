import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">

           <img src="https://image.flaticon.com/icons/svg/417/417751.svg" alt=""/>

           <nav>
               <a href="/profile">Profile</a>
               <a href="/find-friends">Find Friends</a>
               <a href="/manage-connects">Manage Connects</a>
           </nav>
            
        </div>
    );
};

export default Header;