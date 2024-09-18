import React from 'react';

const TaskDetails = ({ task, onEditClick }) => {
    if (!task) return <div className="task-details"><p>Select a task to view details.</p></div>;

    return (
        <div className="task-details">
            <div className="details-content">
                <h3>{task.title}</h3>
                <p>Status: {task.status}</p>
                <p>Timestamp: {task.timestamp}</p>
                <p>Assignee: {task.assignee}</p>
            </div>
            <div className="action-panel">
                <button onClick={() => alert('Task Approved')}>Approve</button>
                <button onClick={() => alert('Task Rejected')}>Reject</button>
                <button onClick={() => alert('Requesting More Info')}>Request More Info</button>
                <button onClick={() => alert('Reassign Task')}>Reassign Task</button>
                <button onClick={onEditClick}>Edit Task</button>
            </div>
        </div>
    );
};

export default TaskDetails;
