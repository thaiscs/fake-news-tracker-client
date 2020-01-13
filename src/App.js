import React from "react";
import "./App.css";
import TextForm from "./components/articles/TextForm";
import { Route } from "react-router-dom";
import ScorePage from "./components/score/ScorePage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={TextForm} />
      <Route exact path="/score" component={ScorePage} />
    </div>
  );
}

export default App;
