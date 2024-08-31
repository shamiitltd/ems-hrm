import React, { useState } from 'react';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, status: 'completed', dueDate: '2024-09-15', assignee: 'Alice' },
    { id: 2, status: 'pending', dueDate: '2024-08-31', assignee: 'John' },
    { id: 3, status: 'HalfDone', dueDate: '2024-09-10', assignee: 'Charlie' },
    { id: 4, status: 'Done', dueDate: '2024-09-05', assignee: 'Jane' },
    { id: 5, status: 'Not Started yet', dueDate: '2024-09-05', assignee: 'Ayush' },
    { id: 6, status: 'Started', dueDate: '2024-09-05', assignee: 'Payal' },
    { id: 7, status: 'pending', dueDate: '2024-09-05', assignee: 'Pooja' },
    { id: 8, status: 'pending', dueDate: '2024-09-05', assignee: 'Shubham' },
    { id: 9, status: 'pending', dueDate: '2024-09-05', assignee: 'Kanishka' },
    { id: 10, status: 'pending', dueDate: '2024-09-05', assignee: 'Rohini' },
  ]);

  const [filters, setFilters] = useState({
    status: '',
    dueDate: '',
    assignee: ''
  });

  const handleFilterChange = (filterType, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterType]: value
    }));
  };

  const filteredTasks = tasks.filter(task => {
    return (
      (filters.status === '' || task.status === filters.status) &&
      (filters.dueDate === '' || task.dueDate === filters.dueDate) &&
      (filters.assignee === '' || task.assignee.toLowerCase().includes(filters.assignee.toLowerCase()))
    );
  });

  return (
    <div className="container">
      <h1>Task Filter</h1>
      <TaskFilter filters={filters} onFilterChange={handleFilterChange} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
};

export default App;
