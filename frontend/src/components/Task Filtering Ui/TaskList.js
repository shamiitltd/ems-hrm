import React from 'react';

const TaskList = ({ tasks }) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <li>No tasks found</li>
      ) : (
        tasks.map(task => (
          <li key={task.id}>
            Task ID: {task.id}, Status: {task.status}, Due Date: {task.dueDate}, Assignee: {task.assignee}
          </li>
        ))
      )}
    </ul>
  );
};

export default TaskList;
