import React from 'react';
import "./menu.css";
import { Link } from 'react-router-dom';

const Menu = ()=>{
    return(
        <>
                {/* Writing Menu Section For reuse in components*/}

                    <div className="menu-section">
                        <section className='menu-sec border-bottom p-3'>
                            <div className="ll1 bg-primary rounded-circle text-center pt-2 me-2">
                                <Link to=""> <i className="fa-regular fa-clipboard" style={{color:'white'}}></i> </Link>
                            </div>
                            <p className='ms-2 text-dark'>Task</p>
                        </section>
                        <section className='menu-sec border-bottom p-3'>
                            <div className="ll1 bg-warning rounded-circle text-center pt-2 me-2">
                                <Link to=""> <i className="fa-solid fa-receipt" style={{color:'white'}}></i> </Link>
                            </div>
                            <p className='ms-1 text-dark'>Notes</p>
                        </section>
                        <section className='menu-sec border-bottom p-3'>
                            <div className="ll1 bg-success rounded-circle text-center pt-2 me-2">
                                <Link to=""> <i className="fa-regular fa-folder" style={{color:'white'}}></i> </Link>
                            </div>
                            <p className='text-dark'>Folder</p>
                        </section>
                        <section className='p-3'>
                            <div className="ll1 rounded-circle text-center pt-2 me-2">
                                <Link to=""> <i className="fa-solid fa-plus"></i> </Link>
                            </div>
                        </section>
                    </div>
        </>
    )
}

export default Menu;