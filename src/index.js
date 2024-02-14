import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";

// Must import styles here!
import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Jordan" />
    <NameTag name="Robbie" />
    <NameTag name="Koda" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
