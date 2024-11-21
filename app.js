import React from 'react';
import './OrgChart.css';

const OrgChart = () => {
  return (
    <div className="content">
      <h1></h1>
      <figure className="org-chart cf">
        <ul className="administration">
          <li>
            <ul className="director">
              <li>
                <a href="#"><span>Chairman</span></a>
                <ul className="subdirector">
                  <li><a href="#"><span>COO</span></a></li>
                </ul>
                <ul className="departments cf">
                  <li><a href="#"><span>CEO</span></a></li>

                  <Department
                    departmentName="CTO"
                    sections={['Section A1', 'Section A2', 'Section A3', 'Section A4', 'Section A5']}
                  />
                  <Department
                    departmentName="CFO"
                    sections={['Section B1', 'Section B2', 'Section B3', 'Section B4']}
                  />
                  <Department
                    departmentName="CLO"
                    sections={['Section C1', 'Section C2', 'Section C3', 'Section C4']}
                  />
                  <Department
                    departmentName="CHRO"
                    sections={['Section D1', 'Section D2', 'Section D3', 'Section D4', 'Section D5', 'Section D6']}
                  />
                  <Department
                    departmentName="VP of Sales"
                    sections={['Section E1', 'Section E2', 'Section E3']}
                  />
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </figure>
    </div>
  );
};

const Department = ({ departmentName, sections }) => (
  <li className="department">
    <a href="#"><span>{departmentName}</span></a>
    <ul className="sections">
      {sections.map((section, index) => (
        <li key={index} className="section">
          <a href="#"><span>{section}</span></a>
        </li>
      ))}
    </ul>
  </li>
);

export default OrgChart;

