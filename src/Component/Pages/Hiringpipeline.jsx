import React from 'react';

const Hiringpipeline = () => {
  const headingData = ['Job', 'New Applied', 'Screening', 'Design Challenge', 'Interview', 'test', 'hired'];
  const colors = ['bg-primary text-white', 'bg-success text-white', 'bg-warning text-dark', 'bg-danger text-white', 'bg-secondary text-white'];

  // Sample data for each section with six different sets of data
  const sectionData = [
    {
      Job: { job1: 'Senior product design', application: 'total application 125' },
      'New Applied': { count: 12 },
      Screening: { count: 5 },
      'Design Challenge': { count: 3 },
      Interview: { count: 2 },
      test: { count: 1 },
      hired: { count: 2 }
    },
    {
      Job: { job1: 'UI/UX designer', application: 'total application 125' },
      'New Applied': { count: 8 },
      Screening: { count: 4 },
      'Design Challenge': { count: 2 },
      Interview: { count: 3 },
      test: { count: 1 },
      hired: { count: 2 }
    },
    {
      Job: { job1: 'UI researcher', application: 'total application 125' },
      'New Applied': { count: 15 },
      Screening: { count: 6 },
      'Design Challenge': { count: 5 },
      Interview: { count: 4 },
      test: { count: 1 },
      hired: { count: 2 }
    },
    {
      Job: { job1: 'Head of UX', application: 'total application 67' },
      'New Applied': { count: 20 },
      Screening: { count: 10 },
      'Design Challenge': { count: 7 },
      Interview: { count: 5 },
      test: { count: 1 },
      hired: { count: 2 }
    },
    {
      Job: { job1: 'illustro', application: 'total application 43' },
      'New Applied': { count: 18 },
      Screening: { count: 8 },
      'Design Challenge': { count: 6 },
      Interview: { count: 4 },
      test: { count: 1 },
      hired: { count: 2 }
    },
    {
      Job: { job1: 'Juniour product design', application: 'total application 12' },
      'New Applied': { count: 22 },
      Screening: { count: 12 },
      'Design Challenge': { count: 9 },
      Interview: { count: 6 },
      test: { count: 1 },
      hired: { count: 2 }
    },
  ];

  return (
    <div className="bg-white text-dark mx-5 my-5 rounded p-3">
      <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <h3 className="mb-0">Hiring Pipeline</h3>
          <button className="btn px-4 btn-secondary ms-md-5">Design</button>
        </div>

        <div className="mb-3 mb-md-0">
          <a href="#" className="btn btn-outline-dark">View All Jobs</a>
        </div>
      </div>

      <hr className="border-bg-secondary border-2lg border-bold" />

      {/* Display the headings once */}
      <div className="d-flex flex-column flex-md-row align-items-center mb-2">
        {headingData.map((heading) => (
          <div key={heading} className="text-dark py-2 px-4 w-100">
            <h5>{heading}</h5>
          </div>
        ))}
      </div>

      {/* Display the data rows */}
      {sectionData.map((data, index) => (
        <div key={index} className="d-flex flex-column flex-md-row align-items-start mb-2">
          {headingData.map((heading, idx) => (
            <div key={heading} className={`text-dark py-1 px-2 w-100 ${heading === 'Job' ? 'd-flex flex-column' : ''}`}>
              {heading === 'Job' ? (
                <>
                  <div className="font-weight-bold">{data.Job.job1}</div>
                  <div className="text-muted">{data.Job.application}</div>
                </>
              ) : (
                <div className={`card p-2 ${colors[(index + idx) % colors.length]}`}>
                  {data[heading].count}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Hiringpipeline;
