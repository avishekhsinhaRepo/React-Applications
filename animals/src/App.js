import "./App.css";
import AnimalShow from "./AnimalShow";
import { useState } from "react";

function getRandomAnimal() {
  const animalsList = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animalsList[Math.floor(Math.random() * animalsList.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  function handleClick() {
    const animal = getRandomAnimal();
    setAnimals([...animals, animal]);
  }

  function renderAnimal() {
    return animals.map((animal, index) => {
      return <AnimalShow type={animal} key={index} />;
    });
  }
  return (
    <div>
      <button onClick={handleClick}>Add Animals</button>
      <p>{renderAnimal()}</p>
    </div>
  );
}

export default App;
