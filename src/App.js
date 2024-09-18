import React, { useState } from 'react';
import QuizSettings from './QuizSettings';
import QuizComponent from './QuizComponent';
import ResultsComponent from './ResultsComponent';
import './App.css'; 

function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [settings, setSettings] = useState({});
  const [score, setScore] = useState(0);

  const startQuiz = (settings) => {
    setSettings(settings);
    setQuizStarted(true);
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setQuizFinished(true); // End the quiz after scoring
  };

  return (
    <div className="app-background">
      <div className="app-container">
        {!quizStarted && !quizFinished && <QuizSettings startQuiz={startQuiz} />}
        {quizStarted && !quizFinished && (
          <QuizComponent settings={settings} finishQuiz={finishQuiz} /> 
        )}
        {quizFinished && <ResultsComponent score={score} total={settings.questionCount} />}
      </div>
    </div>
  );
}

export default App;
