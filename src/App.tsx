import React from "react";
import "./App.css";
//Components
import Principal from "./components/Principal";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Menu />
      <Principal />
    </div>
  );
}

export default App;
