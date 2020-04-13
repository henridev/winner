import React from "react";
import AngularIcon from "./assets/angular.svg";
import ReactIcon from "./assets/react.svg";
import VueIcon from "./assets/vue.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={AngularIcon} className="App-logo" alt="logo" />
      <img src={ReactIcon} className="App-spin App-logo" alt="logo" />
      <img src={VueIcon} className="App-bounce App-logo" alt="logo" />
    </div>
  );
}

export default App;
