import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../pages/App";
import { NewPage } from "../pages/NewPage";
import { Home } from "../pages/Home";
import { MemoryGame } from "../pages/MemoryGame";
import { Lessons } from "../pages/Lessons";
import { Games } from "../pages/Games";
import { Dictionary } from "/usr/local/bin/learn-bsl/src/pages/Dictionary.js";
import { Alphabet } from "../pages/Alphabet";
import { FamilyLesson } from "../pages/FamilyLesson";
import * as PropTypes from "prop-types";
import { FamilyQuiz } from "../pages/FamilyQuiz";

function QuizPage(props) {
  return null;
}

QuizPage.propTypes = { module: PropTypes.any };
export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game1" element={<App />} />
        <Route path="/new-game" element={<NewPage />} />
        <Route path="/MemoryGame" element={<MemoryGame />} />
        <Route path="/Lessons" element={<Lessons />} />
        <Route path="/Games" element={<Games />} />
        <Route path="/Dictionary" element={<Dictionary />} />
        <Route path="/Alphabet" element={<Alphabet />} />
        <Route path="/FamilyLesson" element={<FamilyLesson />} />
        <Route path="/FamilyQuiz" element={<FamilyQuiz />} />
      </Routes>
    </BrowserRouter>
  );
};
