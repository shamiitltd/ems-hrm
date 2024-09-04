import React from 'react';
import "./menu.css";

const Menu = ()=>{
    return(
        <>
                {/* Writing Menu Section For reuse in components*/}

                    <div className="menu-section">
                        <section className='menu-sec border-bottom p-3'>
                            <div className="ll1 bg-primary rounded-circle text-center pt-2 me-2 mb-4">
                                <i className="fa-regular fa-clipboard"></i>
                            </div>
                        </section>
                        <section className='menu-sec border-bottom p-3'>
                            <div className="ll1 bg-warning rounded-circle text-center pt-2 me-2 mb-4">
                                <i className="fa-solid fa-receipt"></i>
                            </div>
                        </section>
                        <section className='menu-sec border-bottom p-3'>
                            <div className="ll1 bg-success rounded-circle text-center pt-2 me-2 mb-4">
                                <i className="fa-regular fa-folder"></i>
                            </div>
                        </section>
                        <section className='p-3'>
                            <div className="ll1 rounded-circle text-center pt-2 me-2">
                                <i className="fa-solid fa-plus"></i>
                            </div>
                        </section>
                    </div>
        </>
    )
}

export default Menu;