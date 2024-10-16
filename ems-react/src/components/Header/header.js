import React from 'react';
import './header.css';
import user from '../Header/images/user.png';
import logo from '../Header/images/Shamilogo.png';
import userLogo from '../Header/images/profile.png'
import setting from '../Header/images/setting.png'
import logout from '../Header/images/logout.png'
import help from '../Header/images/help.png'


import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <>
            <div className='header-main d-flex'>
                <div className='top1 border-end pt-3 text-center'>
                    <button className="border b1 bg-white"></button><button className="border b1 bg-secondary"></button>
                </div>
                <div className='top2 text-center border-end'>
                <img src={logo} className='fimg' /> 

                </div>
                <div className='me-auto p-3'>
                    <button className='btn border-0'><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='bg-warning rounded-circle text-center pt-2 me-2 circle1'>
                        <a href='#'><i className="fa-solid fa-plus"></i></a>
                    </div>
                    <div className='bg-secondary rounded-circle text-center pt-2 me-2 circle1'>
                        <a href='#'><i class="fa-regular fa-bell"></i></a>
                    </div>
                       <img className ='user-img' src={user} alt="" /> 
                </div>
             <div className="sub-menu-wrap">
                <div className="sub-menu">
                    <div className="user-info">
                        <img src={user} />
                        <h4>Jonas Lord</h4>
                        </div>
                        <hr />

                        <a href="#" className = "sub-menu-link">
                            <img src={userLogo} />
                            <p>Edit Profile</p>
                            <span> > </span>
                        </a>
                        <a href="#" className = "sub-menu-link">
                            <img src={setting} />
                            <p>Setting & Privacy</p>
                            <span>></span>
                        </a>
                        <a href="#" className = "sub-menu-link">
                            <img src={help} />
                            <p>Help and support</p>
                            <span>></span>
                        </a>
                        <a href="#" className = "sub-menu-link">
                            <img src={logout} />
                            <p>Logout</p>
                            <span>></span>
                        </a>


                        </div>
                        </div>  
            </div>
        </>
    )
}

export default Header;