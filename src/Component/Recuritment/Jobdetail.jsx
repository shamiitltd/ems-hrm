import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const JobDetail = () => {
  const [showActiveJobs, setShowActiveJobs] = useState(true);
  const navigate = useNavigate(); 
  const activeJobs = [
    {
      jobTitle: 'Senior Product Designer',
      totalJobsCount: 5,
      newJobsCount: 2,
    },
    {
      jobTitle: 'Backend Developer',
      totalJobsCount: 3,
      newJobsCount: 1,
    },
    {
      jobTitle: 'UI/UX Designer',
      totalJobsCount: 4,
      newJobsCount: 2,
    },
    {
      jobTitle: 'Data Scientist',
      totalJobsCount: 2,
      newJobsCount: 0,
    },
    {
      jobTitle: 'Product Manager',
      totalJobsCount: 6,
      newJobsCount: 3,
    },
  ];

  const inactiveJobs = [
    {
      jobTitle: 'Front-end Developer',
      totalJobsCount: 2,
      newJobsCount: 0,
    },
    {
      jobTitle: 'Marketing Specialist',
      totalJobsCount: 1,
      newJobsCount: 0,
    },
    {
      jobTitle: 'QA Engineer',
      totalJobsCount: 3,
      newJobsCount: 0,
    },
    {
      jobTitle: 'Content Writer',
      totalJobsCount: 2,
      newJobsCount: 0,
    },
    {
      jobTitle: 'Sales Manager',
      totalJobsCount: 4,
      newJobsCount: 0,
    },
  ];

  const jobsToDisplay = showActiveJobs ? activeJobs : inactiveJobs;

  return (
    <div>
      <div
        className="mt-1 mx-1 py-3 d-flex justify-content-center"
        style={{ backgroundColor: 'lightcyan' }}
      >
        <button
          type="button"
          className={`btn font-bold mx-3 ${
            showActiveJobs ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setShowActiveJobs(true)}
        >
          ACTIVE JOB
        </button>
        <button
          type="button"
          className={`btn mx-3 ${
            !showActiveJobs ? 'btn-primary' : 'btn-outline-primary'
          }`}
          onClick={() => setShowActiveJobs(false)}
        >
          INACTIVE JOB
        </button>
      </div>

      <div className="d-flex mt-4 flex-wrap justify-content-around">
        {jobsToDisplay.map((job, index) => (
          <div
            key={index}
            className="card mb-3 p-3 border"
            style={{
              width: '230px',
              height: '280px',
              backgroundColor: 'white',
            }}
          >
            <h6 className="card-title">{job.jobTitle}</h6>
            <div>
              <h6 className="text-secondary mt-3">Candidates</h6>
              <div
                className="container my-2 border p-2"
                style={{ backgroundColor: 'lightcyan' }}
              >
                <div className="d-flex justify-content-between">
                  <div className="text-center">
                    <div>Total</div>
                    <div>{job.totalJobsCount}</div>
                  </div>
                  <div className="text-center">
                    <div>New</div>
                    <div>{job.newJobsCount}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between my-2">
              <button className="btn btn-outline-primary btn-sm">
                Full Time
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                Part Time
              </button>
            </div>
            <div className="card-footer d-flex justify-content-between mt-auto">
              <button className="btn btn-sm">
                {showActiveJobs ? 'Active' : 'Inactive'}
              </button>
              <button className="btn btn-sm"
               onClick={() => navigate(`/Jobfrom`)} >See Detail</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobDetail;
