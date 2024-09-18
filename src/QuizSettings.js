import React, { useState } from 'react';
import './QuizSettings.css'; 

function QuizSettings({ startQuiz }) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('General Knowledge');
  const [questionCount, setQuestionCount] = useState(5);
  const [difficulty, setDifficulty] = useState('Easy');
  const [timer, setTimer] = useState(10);

  const handleStart = () => {
    startQuiz({ name, category, questionCount, difficulty, timer });
  };

  return (
    <div className="settings-card">
      <h2 className="settings-title">Welcome to the Ultimate Quiz!</h2>
      <p className="settings-description">Enter your name and choose your quiz preferences.</p>
      
      <label className="label">Your Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} className="input-field" />
      
      <label className="label">Category</label>
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="input-field">
        <option>General Knowledge</option>
        <option>Movies</option>
        <option>Science</option>
        <option>Computers</option>
        <option>Mathematics</option>
        <option>Sports</option>
      </select>

      <label className="label">Number of Questions</label>
      <select value={questionCount} onChange={(e) => setQuestionCount(e.target.value)} className="input-field">
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>

      <label className="label">Difficulty</label>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="input-field">
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <label className="label">Set Timer (Minutes)</label>
      <input type="number" value={timer} onChange={(e) => setTimer(e.target.value)} className="input-field" />
      
      <button onClick={handleStart} className="start-button">Start Quiz 🚀</button>
    </div>
  );
}

export default QuizSettings;
