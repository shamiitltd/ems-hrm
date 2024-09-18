import React, { useState } from 'react';
import axios from 'axios';
import './TaskUpdate.css';

const TaskUpdate = ({ onUpdateNotification }) => {
    const [taskId, setTaskId] = useState('');
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await axios.post('http://localhost:5000/api/tasks/update', {
                taskId,
                status
            });
            onUpdateNotification(`Task ${taskId} updated to ${status}`);
            setTaskId('');
            setStatus('');
        } catch (error) {
            console.error('Error updating task:', error);
        }
        setIsSubmitting(false);
    };

    return (
        <div className="task-update">
            <h2>Update Task</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={taskId}
                    onChange={(e) => setTaskId(e.target.value)}
                    placeholder="Enter task ID"
                    required
                />
                <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Enter new status"
                    required
                />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Updating...' : 'Update Task'}
                </button>
            </form>
        </div>
    );
};

export default TaskUpdate;
