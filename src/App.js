import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TextForm from "./components/articles/TextForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <TextForm />
      </header>
    </div>
  );
}

export default App;
