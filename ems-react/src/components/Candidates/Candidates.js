import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './Candidates.css';
import Sidebar from '../Sidebar/sidebar';
import Header from '../Header/header';
import Menu from '../Menu/menu';

const Candidates = () => {
  return (
    <div className='dashboard d-flex'>
    <Sidebar className='col-lg-2' />
    <div className='col-lg-10'>
        <Header />
        <div className='d-flex'>
            <div className='material'>
            <div class="border-end">
                <div class="d-flex justify-content-between p-3">
                    <h3>Candidates</h3> <button> <i class="fa-solid fa-play"></i> Getting Started</button>
                </div>
                <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="Candidate Name" title="Candidate Name" className = 'Tab'>
    sdcsdcsd
      </Tab>
      <Tab eventKey="Rating" title="Rating" >
        
      </Tab>
      <Tab eventKey="Stages" title="Stages">
        
      </Tab>
     
    </Tabs>
               
            </div>
            </div>
            <div className='menu'>
                <Menu />
            </div>
        </div>
    </div>
</div>
  )
}

export default Candidates
