import React from 'react';
import "./TaskList.css";

function TaskList() {
    return (
      <div className="container">
        <div className="header">
          <span>Name</span>
          <span>Active</span>
          <span>Deadline</span>
          <span>Created by</span>
          <span>Assignee</span>
          <span>Project</span>
          <span>Tags</span>
        </div>
  
        <div className="task-list">
          <p className="create-task-message">Create a task</p>
          <p className="task-info">
            This view will show tasks you and/or your employees are responsible for.
          </p>
          
        </div>
      </div>
    );
  }
  
  export default TaskList;
  