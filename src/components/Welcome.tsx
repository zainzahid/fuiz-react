import React from 'react';
import './Welcome.css';

type WelcomeProps = {
  quizType: string;
};

export function Welcome({ quizType }: WelcomeProps) {
  return (
    <div className="welcome-box container mt-1">
      <div className="quiz-items-box">
        <h1 className="py-1">Take the Friendship Challenge Quiz to See Who Knows You Best!</h1>
        <div className="py-1">
            <p>1. Click on “Start” to begin creating your quiz.</p>
            <p>2. Choose your answer for each question.</p>
            <p>3. Once you have answered all the questions.</p>
            <p>4. Your quiz will be created.</p>
            <p>5. Share the link with your friends.</p>
            <p>6. Come back to the same link to see the results.</p>
        </div>
        <button type='button' className="button py-1">Start</button>
      </div>
    </div>
  );
}

export default Welcome;