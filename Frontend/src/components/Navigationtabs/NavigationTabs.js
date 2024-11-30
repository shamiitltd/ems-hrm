import React from 'react';
import "./NavigationTabs.css";

function NavigationTabs() {
  const tabs = ['Tasks', 'Projects', 'Flows', 'Scrum', 'Efficiency', 'Recycle Bin', 'More'];
  
  return (
    <nav className="navigation-tabs">
      {tabs.map((tab, index) => (
        <button key={index} className="tab">{tab}</button>
      ))}
    </nav>
  );
}

export default NavigationTabs;