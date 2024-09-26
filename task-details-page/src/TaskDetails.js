// src/TaskDetails.js
import React from 'react';
import './TaskDetails.css';

const TaskDetails = ({ task, onBackClick }) => {
  if (!task) {
    return <div className="task-details">Select a task to see details</div>;
  }

  return (
    <div className="task-details">
      <div className="header">
        <button className="back-button" onClick={onBackClick}>← Back</button>
        <h2>Task Details</h2>
      </div>

      <h1 className="task-title">{task.title}</h1>
      <span className={`status-badge ${task.status.toLowerCase()}`}>{task.status}</span>
      
      <div className="task-info">
        <div className="task-due-date">
          <i className="fas fa-calendar-alt"></i>
          <span>Due: {task.dueDate}</span>
        </div>
        <div className="task-assignee">
          <img src={task.assignee.avatar} alt="Assignee Avatar" className="avatar" />
          <span>Assigned to: {task.assignee.name}</span>
        </div>
      </div>

      <h3>Description</h3>
      <p>{task.description}</p>

      <h3>Subtasks</h3>
      <ul>
        {task.subtasks.map((subtask) => (
          <li key={subtask.id}>
            <input type="checkbox" checked={subtask.completed}  />
            <span className={subtask.completed ? 'completed' : ''}>{subtask.title}</span>
          </li>
        ))}
      </ul>

      <div className="footer">
        <button className="complete-button">Mark as Complete</button>
        <button className="edit-button">Edit Task</button>
      </div>
    </div>
  );
};

export default TaskDetails;
