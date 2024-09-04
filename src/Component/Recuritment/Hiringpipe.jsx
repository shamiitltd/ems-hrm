import React from 'react';
import './Hiringpipe.css';

const Hiringpipe = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <div className="d-flex flex-column flex-md-row align-items-center">
          <h2 className="text-primary mr-md-3">Hiring Pipeline</h2>
          <div className="dropdown mt-2 mt-md-0">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ width: '150%', height: '50px', backgroundColor: '#e8eaed', color: '#0d9e94' }}
            >
              Design
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Design</a>
              <a className="dropdown-item" href="#">Development</a>
              <a className="dropdown-item" href="#">Marketing</a>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-info mt-2 mt-md-0">View all jobs</a>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered border-top bg-white">
          <thead>
            <tr>
              <th className="text-info">Jobs</th>
              <th className="text-info">New Applied</th>
              <th className="text-info">Screening</th>
              <th className="text-info">Design<br />Challenge</th>
              <th className="text-info">Interview</th>
              <th className="text-info">Test</th>
              <th className="text-info">Hired</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Senior product design<br /><small>Total applications: <b>126</b></small></td>
              <td className="bg-success text-white">34 candidates</td>
              <td className="bg-success text-white">80 candidates</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>UI/UX designer<br /><small>Total applications: <b>75</b></small></td>
              <td className="bg-danger text-white">12 candidates</td>
              <td className="bg-danger text-white">42 candidates</td>
              <td className="bg-danger text-white">22 candidates</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>UX researcher<br /><small>Total applications: <b>67</b></small></td>
              <td className="bg-warning text-white">12 candidates</td>
              <td className="bg-warning text-white">42 candidates</td>
              <td className="bg-warning text-white">22 candidates</td>
              <td className="bg-warning text-white">22 candidates</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Head of UX<br /><small>Total applications: <b>45</b></small></td>
              <td className="bg-primary text-white">4 candidates</td>
              <td className="bg-primary text-white">42 candidates</td>
              <td className="bg-primary text-white">22 candidates</td>
              <td className="bg-primary text-white">22 candidates</td>
              <td className="bg-primary text-white">22 candidates</td>
              <td></td>
            </tr>
            <tr>
              <td>Illustrator<br /><small>Total applications: <b>43</b></small></td>
              <td className="bg-warning text-white">6 candidates</td>
              <td className="bg-warning text-white">42 candidates</td>
              <td className="bg-warning text-white">22 candidates</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Junior product design<br /><small>Total applications: <b>12</b></small></td>
              <td className="bg-success text-white">5 candidates</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Hiringpipe;
