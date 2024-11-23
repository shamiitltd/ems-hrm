// import React, { useState, useEffect } from 'react';
// import './QuizForm.css';  // Professional CSS for styling
// import QuizReport from './QuizReport';

// const QuizForm = () => {
//     // Sample questions array with correct answers


//     const questionsData = [
//         {
//             id: 1,
//             question_text: "What is the capital of France?",
//             choices: ["Paris", "London", "Rome", "Berlin"],
//             correct_answer: "Paris"
//         },
//         {
//             id: 2,
//             question_text: "Which planet is known as the Red Planet?",
//             choices: ["Mars", "Jupiter", "Venus", "Saturn"],
//             correct_answer: "Mars"
//         },
//         {
//             id: 3,
//             question_text: "Who wrote the play 'Romeo and Juliet'?",
//             choices: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
//             correct_answer: "William Shakespeare"
//         },
//         {
//             id: 4,
//             question_text: "What is the largest ocean on Earth?",
//             choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
//             correct_answer: "Pacific Ocean"
//         },
//         {
//             id: 5,
//             question_text: "How many continents are there on Earth?",
//             choices: ["5", "6", "7", "8"],
//             correct_answer: "7"
//         },
//         {
//             id: 6,
//             question_text: "What is the chemical symbol for gold?",
//             choices: ["Au", "Ag", "Go", "Gd"],
//             correct_answer: "Au"
//         },
//         {
//             id: 7,
//             question_text: "What is the square root of 64?",
//             choices: ["6", "7", "8", "9"],
//             correct_answer: "8"
//         },
//         {
//             id: 8,
//             question_text: "Who painted the Mona Lisa?",
//             choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
//             correct_answer: "Leonardo da Vinci"
//         },
//         {
//             id: 9,
//             question_text: "Which language is used to create web pages?",
//             choices: ["HTML", "C++", "Python", "Java"],
//             correct_answer: "HTML"
//         },
//         {
//             id: 10,
//             question_text: "Which country is known as the Land of the Rising Sun?",
//             choices: ["Japan", "China", "Thailand", "India"],
//             correct_answer: "Japan"
//         }
//     ];

//     const [questions, setQuestions] = useState([]);
//     const [answers, setAnswers] = useState({});
//     const [submitted, setSubmitted] = useState(false);
//     const [score, setScore] = useState(0);

//     useEffect(() => {
//         // Simulate data fetching by setting questions state
//         setTimeout(() => {
//             setQuestions(questionsData);
//         }, 1000);
//     }, []);

//     const handleAnswerChange = (questionId, choice) => {
//         setAnswers(prevAnswers => ({
//             ...prevAnswers,
//             [questionId]: choice
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         let calculatedScore = 0;

//         questions.forEach(question => {
//             if (answers[question.id] === question.correct_answer) {
//                 calculatedScore += 1;
//             }
//         });

//         setScore(calculatedScore);
//         setSubmitted(true);
//     };

//     return (
//         <div className="quiz-form">
//             {submitted ? (
//                 <QuizReport score={score} />
//             ) : (
//                 <form onSubmit={handleSubmit}>
//                     {questions.map((q, index) => (
//                         <div key={q.id} className="question-block">
//                             <label>{q.question_text}</label>
//                             {q.choices.map((choice, i) => (
//                                 <div key={i}>
//                                     <input
//                                         type="radio"
//                                         name={`question_${q.id}`}
//                                         value={choice}
//                                         onChange={() => handleAnswerChange(q.id, choice)}
//                                     /> {choice}
//                                 </div>
//                             ))}
//                         </div>
//                     ))}
//                     <button type="submit">Submit</button>
//                 </form>
//             )}
//         </div>
//     );
// };

// export default QuizForm;

import React, { useState, useEffect } from 'react';
import './QuizForm.css';  // Professional CSS for styling
import QuizReport from './QuizReport';

// Move questionsData outside the component
const questionsData = [
    {
        id: 1,
        question_text: "What is the capital of France?",
        choices: ["Paris", "London", "Rome", "Berlin"],
        correct_answer: "Paris"
    },
    {
        id: 2,
        question_text: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Jupiter", "Venus", "Saturn"],
        correct_answer: "Mars"
    },
    {
        id: 3,
        question_text: "Who wrote the play 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Mark Twain", "Charles Dickens", "Jane Austen"],
        correct_answer: "William Shakespeare"
    },
    {
        id: 4,
        question_text: "What is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct_answer: "Pacific Ocean"
    },
    {
        id: 5,
        question_text: "How many continents are there on Earth?",
        choices: ["5", "6", "7", "8"],
        correct_answer: "7"
    },
    {
        id: 6,
        question_text: "What is the chemical symbol for gold?",
        choices: ["Au", "Ag", "Go", "Gd"],
        correct_answer: "Au"
    },
    {
        id: 7,
        question_text: "What is the square root of 64?",
        choices: ["6", "7", "8", "9"],
        correct_answer: "8"
    },
    {
        id: 8,
        question_text: "Who painted the Mona Lisa?",
        choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
        correct_answer: "Leonardo da Vinci"
    },
    {
        id: 9,
        question_text: "Which language is used to create web pages?",
        choices: ["HTML", "C++", "Python", "Java"],
        correct_answer: "HTML"
    },
    {
        id: 10,
        question_text: "Which country is known as the Land of the Rising Sun?",
        choices: ["Japan", "China", "Thailand", "India"],
        correct_answer: "Japan"
    }
    // Add the rest of your questions here...
];

const QuizForm = () => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Simulate data fetching by setting questions state
        setTimeout(() => {
            setQuestions(questionsData);
        }, 1000);
    }, []); // Empty dependency array since questionsData is stable outside the component

    const handleAnswerChange = (questionId, choice) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: choice
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let calculatedScore = 0;

        questions.forEach(question => {
            if (answers[question.id] === question.correct_answer) {
                calculatedScore += 1;
            }
        });

        setScore(calculatedScore);
        setSubmitted(true);
    };

    return (
        <div className="quiz-form">
            {submitted ? (
                <QuizReport score={score} />
            ) : (
                <form onSubmit={handleSubmit}>
                    {questions.map((q) => (
                        <div key={q.id} className="question-block">
                            <label>{q.question_text}</label>
                            {q.choices.map((choice, i) => (
                                <div key={i}>
                                    <input
                                        type="radio"
                                        name={`question_${q.id}`}
                                        value={choice}
                                        onChange={() => handleAnswerChange(q.id, choice)}
                                    /> {choice}
                                </div>
                            ))}
                        </div>
                    ))}
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default QuizForm;
