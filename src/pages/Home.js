import React from "react";
import { ButtonAppBar } from "../components/Header";

export const Home = () => {
  return (
    <div>
      <ButtonAppBar />
      <h1>Welcome!</h1>

      <h1>
        Go to game 1 <a href={"/game1"}>GO</a>
      </h1>
      <h1>
        Go to game 2 <a href={"/new-game"}>GO</a>
      </h1>
      <h1>
        Go to game 3 <a href={"/MemoryGame"}>GO</a>
      </h1>
    </div>
  );
};
