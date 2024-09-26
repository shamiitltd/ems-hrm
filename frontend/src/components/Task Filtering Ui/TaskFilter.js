import React from 'react';

const TaskFilter = ({ filters, onFilterChange }) => {
  return (
    <div className="filters">
      <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={filters.status}
        onChange={(e) => onFilterChange('status', e.target.value)}
      >
        <option value="">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
        <option value="Half-Done">Half-Done</option>
        .        <option value="Done">Done</option>
        <option value="Not Started yet">Not Started yet</option>
        <option value="Started">Started</option>
        <option value="pending">Pending</option>

      </select>

      <label htmlFor="due-date">Due Date:</label>
      <input
        type="date"
        id="due-date"
        value={filters.dueDate}
        onChange={(e) => onFilterChange('dueDate', e.target.value)}
      />

      <label htmlFor="assignee">Assignee:</label>
      <input
        type="text"
        id="assignee"
        value={filters.assignee}
        onChange={(e) => onFilterChange('assignee', e.target.value)}
        placeholder="Enter assignee name"
      />
    </div>
  );
};

export default TaskFilter;
