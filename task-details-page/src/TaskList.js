// src/TaskList.js
import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks, onTaskClick }) => {
  return (
    <div className="task-list">
      <div className="tabs">
        <button className="tab active">Today</button>
        <button className="tab">Completed</button>
        <button className="add-task">+ Add task</button>
      </div>

      <div className="tasks">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`task-item ${task.status === 'completed' ? 'completed' : ''}`}
            onClick={() => onTaskClick(task)}
          >
            <div className="task-time">{task.time}</div>
            <div className="task-title">{task.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
