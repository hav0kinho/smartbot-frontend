import React from "react";
import "./App.css";
//Components
import Principal from "./components/Principal";
import Menu from "./components/Menu";
import Robot from "./components/Robot";
import RobotAdd from "./components/RobotAdd";

function App() {
  return (
    <div className="App">
      <Menu />
      <Principal />
      <RobotAdd />

      <section className="robot_wrapper">
        <Robot />
        <Robot />
        <Robot />
        <Robot />
        <Robot />
        <Robot />
        <Robot />
        <Robot />
        <Robot />
      </section>
    </div>
  );
}

export default App;
