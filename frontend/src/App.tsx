import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import HeroesContainer from "./components/heroesContainer/HeroesContainer";

function App() {
  return (
    <div className="App">
      <Header/>
        <HeroesContainer/>
    </div>
  );
}

export default App;
