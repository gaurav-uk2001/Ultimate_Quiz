import React from 'react';
import './ResultsComponent.css';

function ResultsComponent({ score, total }) {
  const feedback =
    score / total > 0.8 ? "🌟 Excellent!" :
    score / total > 0.5 ? "😊 Good job!" :
    "🙁 Keep practicing!";

  return (
    <div className="results-card">
      <h2>Quiz Results</h2>
      <p>You scored {score} out of {total}</p>
      <div className="feedback">{feedback}</div>
      <div className="emoji">{feedback.includes("Excellent") ? "🎉" : feedback.includes("Good") ? "👍" : "😔"}</div>
      <button className="retry-button" onClick={() => window.location.reload()}>Retry Quiz</button>
    </div>
  );
}

export default ResultsComponent;
