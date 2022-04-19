import React, { useState } from "react";
import './QuizApp.css'

function QuizApp() {
  const questions = [
    {
      questionText: "Banana",
      answerOptions: [
        { answerText: "Elma", isCorrect: false },
        { answerText: "Karpuz", isCorrect: false },
        { answerText: "Muz", isCorrect: true },
        { answerText: "Cilek", isCorrect: false },
      ],
    },
    {
      questionText: "Apple",
      answerOptions: [
        { answerText: "Elma", isCorrect: true },
        { answerText: "Karpuz", isCorrect: false },
        { answerText: "Muz", isCorrect: false },
        { answerText: "Cilek", isCorrect: false },
      ],
    },
    {
      questionText: "Wasser Melone",
      answerOptions: [
        { answerText: "Elma", isCorrect: false },
        { answerText: "Karpuz", isCorrect: true },
        { answerText: "Muz", isCorrect: false },
        { answerText: "Cilek", isCorrect: false },
      ],
    },
    {
      questionText: "Strawberry",
      answerOptions: [
        { answerText: "Elma", isCorrect: false },
        { answerText: "Karpuz", isCorrect: false },
        { answerText: "Muz", isCorrect: false },
        { answerText: "Cilek", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {

    if(isCorrect===true){
        setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < questions.length){

        setCurrentQuestion(nextQuestion); 

    }else{
        setShowScore(true)
    }
   
  };

  return (
    <main>
      
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)} key={index}>
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </main>
  );
}

export default QuizApp;
