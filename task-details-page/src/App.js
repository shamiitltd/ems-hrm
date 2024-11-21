// src/App.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import './App.css';


function App() {
  const [selectedTask, setSelectedTask] = useState(null);

  const tasks = [
    { id: 1, time: '7:00 - 7:45 AM', title: 'Interview with Product Designer Applicant', status: 'completed' },
    { id: 2, time: '9:00 - 11:30 AM', title: 'Conduct test for UX Researcher Candidates', status: 'pending' },
    { id: 3, time: '1:00 - 1:45 PM', title: 'UI Design Candidates Screening', status: 'in-progress' },
    { id: 4, time: '2:00 - 2:30 AM', title: 'Submit Finance Recruitment Result', status: 'pending' },
    { id: 5, time: '3:00 - 5:30 AM', title: 'Make New Career Site with New Logo', status: 'completed' }
  ];

  

  const taskDetails = {
    title: selectedTask?.title || '',
    status: selectedTask?.status || '',
    dueDate: 'September 10, 2024',
    assignee: {
      name: 'Umesh',
      avatar: 'https://via.placeholder.com/40',
    },
    description: 'Detailed description of the selected task goes here.',
    subtasks: [
      { id: 1, title: "Review candidate's portfolio",  },
      { id: 2, title: 'Schedule interview time',  },
      { id: 3, title: 'Prepare interview questions',  },
    ],
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="app">
      <TaskList tasks={tasks} onTaskClick={handleTaskClick} />
      <TaskDetails task={selectedTask ? taskDetails : null} onBackClick={() => setSelectedTask(null)} />
    </div>
  );
}

export default App;
