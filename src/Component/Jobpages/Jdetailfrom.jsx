import React from 'react'

const Jdetailfrom = () => {
  return (
    <div className="container my-4">
    <div className="row">

      <div className="col-lg-8 mb-3">
        <div className="card h-100 border rounded-lg">
        <div className='bg-light mx-2 mt-2 rounded'>
  <div className='rounded justify-content-left py-2 w-75 my-3 mx-3 d-flex flex-column flex-md-row'>
    <h5>Header</h5>
  </div>
  <div className="mx-3 my-2">
    <label htmlFor="uploadImage" className="form-label">Add Image</label>
    <input type="file" className="form-control" id="uploadImage" />
  </div>
</div>
{/* <hr className="mx-3 my-2" /> */}
          <div className="card-body mt-3 bg-light">
          <div className="bg-light  text-white rounded d-flex justify-content-left align-items-left px-3 flex-column">
          <span className="text-dark ">Job title</span>
            <h5 className="font-weight-bold text-dark mb-0">Senior Product Designer</h5>
            
          </div>
          <hr className="mx-3 my-3" />
          <div className='d-flex justify-content-between mx-4 mt-5 align-items-center'>
  <h4 className='ml-4'>Job Description</h4>
  <div>
    <button type="button" className="btn btn-outline-secondary mx-1">Cancel</button>
    <button type="button" className="btn btn-outline-secondary mx-1">Save</button>
  </div>
</div>

            <div className="mt-3 mx-3 border border-secondary p-3">

<div className='bg-light  text-dark mb-4 border-gray'>
<div className="d-flex align-items-center">
  {/* <TbCircleLetterBFilled /> */}

</div>

</div>
<div>
<p>We are hiring on behalf of a fast-growing startup. They empower restaurants to thrive in the competitive delivery marketplace. Their technology enables restaurants to recover 80% of disputed money on platforms like DoorDash, UberEats, and Grubhub with a single click, boost profits by 25%, manage online ads and promotions through one interface, and respond to all customer reviews using AI.</p>
</div>
<div>
  <h5 className='text-dark align-item-left'>responsibility</h5>
  <ul>
  <li>Front-End Development: Assist in building and maintaining responsive web interfaces using HTML, CSS, and ReactJS</li>   <li>Back-End Development: Contribute to server-side development using NodeJS, including creating RESTful APIs and</li>
    <li>Consult with end user to prototype, refine, test, and debug programs to meet needs</li>
    <li> backend developers, and other stakeholders to deliver seamless and engaging user experiences.</li>
    <li>Analyze code to find causes of errors and revise programs as needed.</li>
    <li>Participate in software design meetings and analyze user needs to determine technical requirements.</li>
  </ul>
</div>
<div>
  <h5>Requirement</h5>
  <ul>
    <li>3-5 years of hands-on experience in frontend development with React.js.</li>
    <li> Proficiency in HTML, CSS, JavaScript, and responsive design principles.</li>
    <li> Strong communication and collaboration abilities, with a focus on teamwork.</li>
    <li>Excellent problem-solving skills and attention to detail.</li>
   
  </ul>
</div>





              {/* <form className='justify-content-between'>
                
               
                   
                  
                
                <div className="form-row mt-3 d-flex">
                  <div className="form-group flex-grow-1 col-md-6">
                    <label>Zip Code:</label>
                    <input type="text" className="form-control" placeholder="Your zip code" style={{ width: '70%' }} />
                  </div>
                 
                </div>
                <div className="form-group mt-3">
                  <label>Address:</label>
                  <input type="text" placeholder="Your address" style={{ width: '70%' }} />
                </div>
              </form> */}</div>
            <div className='mt-4 border secondary mx-3 py-3 '>
  <span>Skill</span>
  <div className="mt-2">
    <button type="button" className="btn btn-outline-secondary mx-1">Ui design</button>
    <button type="button" className="btn btn-outline-secondary mx-1">Communication</button>
    <button type="button" className="btn btn-outline-secondary mx-1">Sketching</button>
    <button type="button" className="btn btn-outline-secondary mx-1">Design Thinking</button>
  </div>
</div>
<div><h6>attachement</h6></div>

<textarea  name="" id=""   className=' w-50 h-40'></textarea>
          </div>
        </div>
        
      </div>
  
      {/* Second Card Container */}
      <div className="col-lg-4 mb-3">
  <div className="card h-100 border rounded-lg">
    <div className="d-flex rounded bg-light justify-content-left py-3 mt-2 mx-3">
      <div className="mx-3 py-2 text-center text-dark rounded">
        <h5 className="font-weight-bold mb-0">Job details</h5>
      </div>
    </div>
    <div className="card-body mt-3 bg-light px-4 py-3">
      
      <div className="bg-light text-white rounded d-flex flex-column justify-content-center align-items-start px-3 py-2 mb-3">
        <span className="text-dark">Job creation date</span>
        <h5 className="font-weight-bold text-dark mb-0">March 1, 2021</h5>
      </div>
      
      <div className="bg-light text-white rounded d-flex flex-column justify-content-center align-items-start px-3 py-2 mb-3">
        <span className="text-dark">Hiring manager</span>
        <h5 className="font-weight-bold text-dark mb-0">Ashu</h5>
      </div>
      
      <div className="bg-light text-white rounded d-flex flex-column justify-content-center align-items-start px-3 py-2 mb-3">
        <span className="text-dark">Department</span>
        <h5 className="font-weight-bold text-dark mb-0">Design</h5>
      </div>
      
      <div className="bg-light text-white rounded d-flex flex-column justify-content-center align-items-start px-3 py-2 mb-3">
        <span className="text-dark">Job type</span>
        <h5 className="font-weight-bold text-dark mb-0">Full-time</h5>
      </div>
      
      <div className="bg-light text-white rounded d-flex flex-column justify-content-center align-items-start px-3 py-2">
        <span className="text-dark">Location</span>
        <h5 className="font-weight-bold text-dark mb-0">Nagpur</h5>
      </div>
      
    </div>
  </div>
</div>

    </div>
  </div>
  )
}

export default Jdetailfrom