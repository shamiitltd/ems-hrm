import React from 'react';
import "./menu.css";

const Menu = ()=>{
    return(
        <>
                {/* Writing Menu Section For reuse in components*/}

                    <div className="menu-section">
                        <section className='menu-sec border-bottom p-3'>
                            <div className="ll1 bg-primary rounded-circle text-center pt-2 me-2 mb-4">
                                <a href='#'><i className="fa-regular fa-clipboard" style={{color:'white'}}></i></a>
                            </div>
                        </section>
                        <section className='menu-sec border-bottom p-3'>
                            <div className="ll1 bg-warning rounded-circle text-center pt-2 me-2 mb-4">
                                <a href='#'><i className="fa-solid fa-receipt" style={{color:'white'}}></i></a>
                            </div>
                        </section>
                        <section className='menu-sec border-bottom p-3'>
                            <div className="ll1 bg-success rounded-circle text-center pt-2 me-2 mb-4">
                                <a href='#'><i className="fa-regular fa-folder" style={{color:'white'}}></i></a>
                            </div>
                        </section>
                        <section className='p-3'>
                            <div className="ll1 rounded-circle text-center pt-2 me-2">
                                <a href='#'><i className="fa-solid fa-plus"></i></a>
                            </div>
                        </section>
                    </div>
        </>
    )
}

export default Menu;