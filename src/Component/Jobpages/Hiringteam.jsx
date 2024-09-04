import React from 'react';

const Hiringteam = () => {
  return (
    <div className="container my-4">
      <div className="row">
        
        {/* Timeline Data */}
        <div className="col-lg-6 mb-3">
  <div className="card h-100 border rounded-lg">
    <div className="card-body">
      <h5 className="card-title">Timeline</h5>
      <div className="p-3">
        <input type="date" className="form-control mb-3" />
        <div>
          <h6 className="font-weight-bold">Details</h6>
          <ul className="list-unstyled">
            <li>
              <strong>Person:</strong> John Doe
            </li>
            <li>
              <strong>Screening Time:</strong> March 20, 2024, 3:00 PM
            </li>
            <li>
              <strong>Status:</strong> Scheduled
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


        {/* Notes Section */}
        <div className="col-lg-6 mb-3">
          <div className="card h-100 border rounded-lg">
            <div className="d-flex rounded bg-light justify-content-left py-3 mt-2 mx-3">
              <div className="mx-3 py-2 text-center text-dark rounded">
                <h5 className="font-weight-bold mb-0">Notes</h5>
              </div>
            </div>
            <div className="card-body mt-3 bg-light px-4 py-3">
              {/* Schedule Changes */}
              {[
                { title: 'Screening Schedule Change', date: 'March 20, 2024', time: '3:00 PM', description: 'Due to an unexpected event, the screening end date has been changed from March 31 to March 20.' },
                { title: 'Interview Schedule Change', date: 'April 5, 2024', time: '10:00 AM', description: 'The interview schedule has been adjusted from April 7 to April 5.' },
                { title: 'Final Round Schedule Change', date: 'April 10, 2024', time: '1:00 PM', description: 'The final round has been rescheduled from April 12 to April 10.' },
                { title: 'Onboarding Schedule Change', date: 'April 15, 2024', time: '9:00 AM', description: 'The onboarding session has been moved from April 20 to April 15.' },
                { title: 'Training Session Change', date: 'April 18, 2024', time: '2:00 PM', description: 'The training session has been shifted from April 21 to April 18.' },
              ].map((change, index) => (
                <div key={index}>
                  <h5>{change.title}</h5>
                  <p className="text-muted">Date: {change.date} | Time: {change.time}</p>
                  <p>{change.description}</p>
                  {index < 4 && <hr />} {/* Add hr only between items, not after the last one */}
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Hiringteam;
