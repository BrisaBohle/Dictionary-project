import React from "react";
import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Dictionary defaultKeyword="sunrise"/>
        </header>

      </div>
      <footer>This project was coded by <a href="https://brisa-bohle.netlify.app/" target="_blank" rel="noreferrer">Brisa Bøhle</a>, open-sourced on<a href="https://naughty-nightingale-49b26e.netlify.app/" target="_blank" rel="noreferrer"> Netlify</a></footer>
    </div>
  );
}

export default App;
