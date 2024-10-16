import React, { useState } from "react";
import Player from "./components/Player";
import { Add } from "./Add";
import Gameboared from "./components/Gameboared";

const App = () => {
  const [activeplayer, setactiveplayer] = useState("X");
  function theactiveplayer() {
    setactiveplayer((currentactive) => (currentactive == "X" ? "O" : "X"));
  }
  return (
    <div>
      <img src="../public/tic.png" alt="" className="mx-auto h-16 " />
      <div
        id="game-container"
        className=" bg-slate-200   mx-auto flex  justify-evenly flex-col max-w-4xl p-10 mt-5 "
      >
        <div className="flex justify-evenly">
          <Player playername={"player 1"} playersymbol={"X"} />
          <Player playername={"player 2"} playersymbol={"O"} />
        </div>
        <div id="game-boared">
          <Gameboared activeis={theactiveplayer} activesymbol={activeplayer} />
        </div>
      </div>
    </div>
  );
};

export default App;
