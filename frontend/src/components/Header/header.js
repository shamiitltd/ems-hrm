import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
        <>
                {/* Writing Header Section For reuse in components*/}

            <div className='header-main d-flex'>
                <div className='top1 border-end pt-3 text-center'>
                    <button className="border b1 bg-white"></button><button className="border b1 bg-secondary"></button>
                </div>
                <div className='top2 text-center border-end'>
                <img src='' className='fimg' /> <span>Shamiit</span>
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
                    <div className='bg-secondary rounded-circle text-center pt-2 me-2 circle1'>
                        <a href='#'><i class="fa-solid fa-user"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;