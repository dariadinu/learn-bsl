import React, { useState } from "react";
import { greetingsLessonQuizQuestions } from "../utils/imageData";
import "./familyQuiz.css";
import { Link, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import SearchAppBar from "../components/SearchAppBar";

export const GreetingsQuiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const questions = greetingsLessonQuizQuestions.questions;
  const { question, choices, correctAnswer, imagePath, choicesImg } =
    questions[activeQuestion];

  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    console.log("answer is ", answer);
    console.log("index is ", index);
    console.log("correct ans is ", correctAnswer);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const handleRestart = () => {
    setActiveQuestion(0);
    setSelectedAnswer("");
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
    setShowResult(false);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <main>
      <div className="quiz-container">
        <SearchAppBar />
        <ThemeProvider theme={theme} />

        {!showResult ? (
          <div>
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>

            <div>
              {imagePath ? (
                <div>
                  <h2>{question}</h2>
                  <img src={imagePath} style={{ width: "30%" }} />
                </div>
              ) : (
                <h2>{question}</h2>
              )}
            </div>
            <ul>
              {choicesImg
                ? choicesImg.map((answer, index) => (
                    <li
                      onClick={() => onAnswerSelected(answer, index)}
                      key={answer}
                      className={
                        selectedAnswerIndex === index ? "selected-answer" : null
                      }
                    >
                      {" "}
                      <img src={answer} style={{ width: "30%" }} />
                    </li>
                  ))
                : choices.map((answer, index) => (
                    <li
                      onClick={() => onAnswerSelected(answer, index)}
                      key={answer}
                      className={
                        selectedAnswerIndex === index ? "selected-answer" : null
                      }
                    >
                      {answer}
                    </li>
                  ))}
            </ul>
            <div className="flex-right">
              <button
                onClick={handleNext}
                disabled={selectedAnswerIndex === null}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
            <button onClick={handleRestart}> Retake quiz</button>
            {/*<button> Reveal answers</button>*/}
            <Link href="/Lessons">Go back to lessons</Link>
          </div>
        )}
      </div>
    </main>
  );
};
