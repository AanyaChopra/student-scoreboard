import React, { useState } from 'react';
import './AddStudentForm.css';

const AddStudentForm = ({ onAddStudent }) => {
    const [name, setName] = useState('');
    const [score, setScore] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim()) {
            setError('Please enter a student name');
            return;
        }

        if (score === '' || isNaN(score) || score < 0 || score > 100) {
            setError('Please enter a valid score (0-100)');
            return;
        }

        onAddStudent(name.trim(), parseInt(score));
        setName('');
        setScore('');
        setError('');
    };

    return (
        <div className="form-container">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit} className="add-student-form">
                <div className="form-group">
                    <label htmlFor="name">Student Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter student name"
                        className="form-input"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="score">Score (0-100):</label>
                    <input
                        type="number"
                        id="score"
                        value={score}
                        onChange={(e) => setScore(e.target.value)}
                        placeholder="Enter score"
                        min="0"
                        max="100"
                        className="form-input"
                    />
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="submit-btn">
                    Add Student ➕
                </button>
            </form>
        </div>
    );
};

export default AddStudentForm;