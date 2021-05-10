import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Search } from "./features/Search";
import gameTimeLogo from "./game-time.png";
import "./App.css";
function App() {
  return (
    <div className="App">
      <img className="game-time-image" src={gameTimeLogo}></img>
      <Search />
    </div>
  );
}

export default App;
