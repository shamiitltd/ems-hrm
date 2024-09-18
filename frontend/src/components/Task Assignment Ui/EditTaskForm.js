import React, { useState } from 'react';

const EditTaskForm = ({ task, onUpdateTask }) => {
    const [formData, setFormData] = useState({
        title: task.title,
        status: task.status,
        timestamp: task.timestamp,
        assignee: task.assignee,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateTask(formData);
    };

    return (
        <div className="edit-task-form">
            <h3>Edit Task</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Task Name:
                    <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                </label>
                <label>
                    Status:
                    <input type="text" name="status" value={formData.status} onChange={handleChange} required />
                </label>
                <label>
                    Timestamp:
                    <input type="datetime-local" name="timestamp" value={formData.timestamp} onChange={handleChange} required />
                </label>
                <label>
                    Assignee:
                    <input type="text" name="assignee" value={formData.assignee} onChange={handleChange} required />
                </label>
                <button type="submit">Update Task</button>
            </form>
        </div>
    );
};

export default EditTaskForm;
