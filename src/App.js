import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sujeeth Sundaram</h1>
        <p>Web Developement, Data Science, Machine Learning
        </p>
        <h1>🡇</h1>
      </header>
      <section className="About">
        <h2>About Me</h2>
        <p>
          I am a 3rd year student at VIT Chennai pursuing B.Tech Computer Science with Specialization in AI and Machine Learning.
        </p>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Project 1:</strong> Made an ML model thats detects handwritten digits and identifies them.
          </li>
          <li>
            <strong>Project 2:</strong> and ML model that detects a picture of a Pokemon and identifies its name.
          </li>
          <li>
            <strong>Project 3:</strong> A self learning AI snake game using deep reinforcement learning. 
          </li>
        </ul>
      </section>
      <section className="Contact">
        <h2>Contact</h2>
        <p>Email: sujeeth1807@gmail.com</p>
        <p>GitHub: <a href="https://github.com/sujeethsundaram">github.com/sujeethsundaram</a></p>
      </section>
    </div>
  );
}

export default App;

