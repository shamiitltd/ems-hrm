// import Sidebar from "./Component/Layout/Sidebar";
// import 'bootstrap/dist/css/bootstrap/min.css';
// function App() {
//   return (
//   <div>
//     <Sidebar/>
//   </div>
//   );
// }

// export default App;
import React from 'react'
import Sidebar from "./Component/Recuritment/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Frombuild from './Component/Pages/Frombuild';
import Candidate from './Component/Pages/Candidate';
import Hiringpipeline from './Component/Pages/Hiringpipeline';

const App = () => {
  return (
    <div className='d-flex flex-column flex-md-row bg-info'>
    <div className='col-12 col-md-auto p-3'>
      <Sidebar />
    </div>
    <div className='col-12 col-md-9 p-3'>
     <Frombuild/>
     <Candidate/>
     <Hiringpipeline/>
    </div>
  </div>
  )
}

export default App