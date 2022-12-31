import React, { useState } from "react";
import { Quiz } from "../../App";

const QuizForm: React.FC<{
  quiz: Quiz;
  setQuiz: React.Dispatch<React.SetStateAction<Quiz>>;
}> = ({ quiz, setQuiz }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(
    quiz.quiz[Math.floor(Math.random() * quiz.quiz.length)]
  );

  const [nameError, setNameError] = useState("");
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuiz({ ...quiz, name: event.target.value });
  };

  const handleNext = () => {
    if (quiz.name.trim() === '') {
        setNameError('Please enter your name');
        return;
    }
    setCurrentStep(currentStep + 1);
    setCurrentQuestion(
      quiz.quiz[Math.floor(Math.random() * quiz.quiz.length)]
    );
  };

  const handleFinish = () => {
    // Update state with final answers and redirect to results page
  };

  const handleSkip = () => {
    const newQuiz = quiz.quiz.filter((q) => q !== currentQuestion);
    setQuiz({ ...quiz, quiz: newQuiz });
    setCurrentQuestion(
      quiz.quiz[Math.floor(Math.random() * quiz.quiz.length)]
    );
  };

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuiz = quiz.quiz.map((q) => {
      if (q === currentQuestion) {
        return {
          ...q,
          correctAnswer: event.target.value,
        };
      }
      return q;
    });
    setQuiz({ ...quiz, quiz: newQuiz });
  };

//   const getRandomQuestionNo = () => {
//     return Math.floor(Math.random() * quiz.quiz.length)
//   }

  return (
    <div className="quiz-box container mt-1">
      {currentStep === 1 && (
        <form>
          <input type="text" placeholder="Your Name" onChange={handleNameChange} />
          { nameError && <p style={{ color: 'red' }}>{nameError}</p>}
          <div>
            <input type="radio" name="gender" value="male" /> Male
            <input type="radio" name="gender" value="female" /> Female
          </div>
          <button type="button" onClick={handleNext}>
            Next
          </button>
        </form>
      )}
      {currentStep > 1 && currentStep <= 11 && (
        <form>
          <h1>Question {currentStep - 1} of 10</h1>
          <p>{currentQuestion.statement}</p>
          {currentQuestion.answers.map((answer) => (
            <div>
              <input
                type="radio"
                name="answer"
                value={answer}
                onChange={handleAnswerChange}
              />
              {answer}
            </div>
          ))}
          <a href="#" onClick={handleSkip}>
            Skip this question
          </a>
          {currentStep < 11 && (
            <button type="button" onClick={handleNext}>
              Next
            </button>
          )}
          {currentStep === 11 && (
            <button type="button" onClick={handleFinish}>
              Finish
            </button>
          )}
        </form>
      )}
    </div>
  );
};

export default QuizForm;
