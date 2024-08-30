import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <>
            <div className='header-main d-flex'>
                <div className='top1 border-end pt-3 text-center'>
                    <button className="border b1 bg-white"></button><button className="border b1 bg-secondary"></button>
                </div>
                <div className='top2 text-center border-end'>
                Your organization <br/>
                <img src='images/F.png' className='fimg' /> <span>Shamiit</span>
                </div>
                <div className='me-auto p-3'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='bg-warning rounded-circle text-center pt-2 me-2 circle1'>
                        <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className='bg-secondary rounded-circle text-center pt-2 me-2 circle1'>
                        <i class="fa-regular fa-bell"></i>
                    </div>
                    <div className='bg-secondary rounded-circle text-center pt-2 me-2 circle1'>
                        <i class="fa-solid fa-user"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;