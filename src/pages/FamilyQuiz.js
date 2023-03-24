import React, { useState } from "react";
import { familyLessonQuizQuestions } from "../utils/imageData";
import "./familyQuiz.css";
import { Link, Stack, ThemeProvider } from "@mui/material";
import theme from "../utils/theme";
import SearchAppBar from "../components/SearchAppBar";

export const FamilyQuiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const questions = familyLessonQuizQuestions.questions;
  const {
    question,
    choices,
    correctAnswer,
    imagePath,
    choicesImg,
    correctIndex,
  } = questions[activeQuestion];

  const [answerIsCorrect, setAnswerIsCorrect] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState();

  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    // setSelectedAnswerIndex(null);
    setResult((prev) =>
      answerIsCorrect
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    setSelectedAnswer(false);
    setAnswerIsCorrect(false);
    setSelectedIndex(undefined);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswer(true);
    setSelectedIndex(index);
    if (index === correctIndex) {
      setAnswerIsCorrect(true);
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
      <ThemeProvider theme={theme}>
        <Stack direction="column" spacing={2}>
          <header>
            <SearchAppBar />
          </header>
          <div className="quiz-container">
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
                    ? choicesImg.map((answer, index) => {
                        let classNameToApply = "";
                        if (selectedAnswer) {
                          if (index === correctIndex) {
                            classNameToApply = "correct-answer";
                          } else {
                            classNameToApply = "wrong-answer";
                          }
                        }
                        if (selectedIndex === index) {
                          classNameToApply += " selected-answer";
                        }
                        return (
                          <li
                            onClick={() => onAnswerSelected(answer, index)}
                            key={answer}
                            className={classNameToApply}
                          >
                            {" "}
                            <img src={answer} style={{ width: "30%" }} />
                          </li>
                        );
                      })
                    : choices.map((answer, index) => {
                        let classNameToApply = "";
                        if (selectedAnswer) {
                          if (index === correctIndex) {
                            classNameToApply = "correct-answer";
                          } else {
                            classNameToApply = "wrong-answer";
                          }
                        }
                        if (selectedIndex === index) {
                          classNameToApply += " selected-answer";
                        }
                        return (
                          <li
                            onClick={() => onAnswerSelected(answer, index)}
                            key={answer}
                            className={classNameToApply}
                          >
                            {answer}
                          </li>
                        );
                      })}
                </ul>
                <div className="flex-right">
                  <button onClick={handleNext} disabled={!selectedAnswer}>
                    {activeQuestion === questions.length - 1
                      ? "Finish"
                      : "Next"}
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
        </Stack>
      </ThemeProvider>
    </main>
  );
};
