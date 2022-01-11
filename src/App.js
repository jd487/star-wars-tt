import * as React from "react";
import Navbar from "./components/NavBar.jsx";
import ControlPanel from "./controlPanelPage/ControlPanel.jsx";
import GameState from "../src/context/gameState";

function App() {
  return (
    <>
      <GameState>
        <Navbar />
        <ControlPanel />
      </GameState>
    </>
  );
}

export default App;
