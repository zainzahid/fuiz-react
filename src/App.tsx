import { useState } from "react";
import "./App.css";
import { Welcome } from "./components//Welcome/Welcome";
import { Navbar } from "./components/Navbar/Navbar";
import QuizForm from "./components/QuizForm/QuizForm";

export interface QuizQuestion {
  statement: string;
  answers: string[];
  correctAnswer: string | null;
}

export interface Quiz {
  name: string;
  gender: string;
  quiz: QuizQuestion[];
  phase: QuizPhase
}

enum QuizPhase {
  Welcome = 'Welcome',
  Creation = 'Creation',
  Feedback = 'Feedback'
};

function App() {
  const [quiz, setQuiz] = useState<Quiz>({
    name: '',
    gender: '',
    quiz: [
      {
        statement: 'What is your Friend\'s favorite healthy snack?',
        answers: ['Fruit', 'Nuts', 'Yogurt', 'Cheetos'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite hobby?',
        answers: ['Photography', 'Hiking', 'Painting', 'Watching movies'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of music?',
        answers: ['Pop', 'Rock', 'Jazz', 'Classical'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of food?',
        answers: ['Italian', 'Mexican', 'Chinese', 'Thai'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite movie genre?',
        answers: ['Comedy', 'Action', 'Romance', 'Thriller'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of book?',
        answers: ['Mystery', 'Romance', 'Fiction', 'Non-fiction'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of sport?',
        answers: ['Football', 'Basketball', 'Baseball', 'Soccer'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of vacation?',
        answers: ['Beach', 'Skiing', 'City', 'Nature'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of weather?',
        answers: ['Sunny', 'Rainy', 'Snowy', 'Cloudy'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of animal?',
        answers: ['Dog', 'Cat', 'Fish', 'Bird'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of color?',
        answers: ['Red', 'Blue', 'Green', 'Purple'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of TV show?',
        answers: ['Comedy', 'Drama', 'Reality', 'Documentary'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of game?',
        answers: ['Board', 'Card', 'Video', 'Outdoor'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of dessert?',
        answers: ['Cake', 'Ice cream', 'Pie', 'Cookies'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of restaurant?',
        answers: ['Fast food', 'Fine dining', 'Casual', 'Café'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of drink?',
        answers: ['Coffee', 'Tea', 'Soda', 'Juice'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of fruit?',
        answers: ['Apple', 'Banana', 'Orange', 'Strawberry'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of vegetable?',
        answers: ['Carrot', 'Broccoli', 'Tomato', 'Pepper'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of season?',
        answers: ['Spring', 'Summer', 'Fall', 'Winter'],
        correctAnswer: null,
      },
      {
        statement: 'What is your Friend\'s favorite type of holiday?',
        answers: ['Christmas', 'Halloween', 'Easter', 'Thanksgiving'],
        correctAnswer: null,
      }
    ],
    phase: QuizPhase.Welcome
  });

  const moveToCreationPhase = () => {
    setQuiz({ ...quiz, phase: QuizPhase.Creation });
  }

  return (
    <>
      <Navbar />
      {
        quiz.phase === QuizPhase.Welcome &&
        <Welcome quizType="FF" moveToCreationPhase={moveToCreationPhase} />
      }
      {
        quiz.phase === QuizPhase.Creation &&
        <QuizForm quiz={quiz} setQuiz={setQuiz} />
      }
    </>
  );
}

export default App;
