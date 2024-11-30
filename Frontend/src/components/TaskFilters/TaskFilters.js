import React from 'react';
import "./TaskFilters.css";

function TaskFilters() {
  return (
    <div className="task-filters">
      <button className="status-button">In Progress</button>
      <button className="overdue-button">Overdue</button>
      <button className="comments-button">Comments</button>
      <button className="mark-button">Mark all as read</button>
    </div>
  );
}

export default TaskFilters;