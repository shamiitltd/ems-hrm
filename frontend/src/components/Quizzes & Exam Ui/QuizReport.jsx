import React from 'react';
// import './QuizReport.css';  // CSS for styling report

const QuizReport = ({ score }) => {
    return (
        <div className="quiz-report">
            <h1>Quiz Report</h1>
            <p>Your score: {score} / 10</p>
        </div>
    );
};

export default QuizReport;