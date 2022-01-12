import React from "react";
import Navbar from "./components/NavBar.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import GameState from "../src/context/gameState";

// Given more time (I kept it to around 3 hours) I would of addressed the following issues:

// 1) Styling - I would of gone for a proper styling strategy (css modules), rather
// than use in-line styling. I also would of put more effort into making the app
// look a bit sleeker.

// 2) Testing - Jest tests would accompany each component. Though I have used the chrome
// dev tool AXE to test for, and ensure, web accessibility.

// 3) Reuseability - MatieralUI has been used to speed up the development process.
// However, given more time I would of broken down components into smaller, more
// reuseable ones.

// 4) Structure - The CardComponent does much of the heavy lifting, ideally this would of
// been bought up the component tree, and the CardCompoent could of been made more reuseable.

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
